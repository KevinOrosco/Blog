import Footer from "./components/Footer";
import Header from "./components/Header";
import  Post  from "./components/Post";
import { useEffect, useState } from "react";
import supabase from "./lib/helper/supabaseClient";
import { SupabaseClient } from "@supabase/supabase-js";

export default function App() {
  const [user, setUser] = useState(null);
  //useEffect depende de las variables que se van actualizando a medida del codigo, estas son llamadas dependencias, el useEffect es capaz de ejecutarse una unica vez al inicio del codigo en caso de que se lo llame. su funcion es ejecutar y renderizar
  //useEffect renderiza.
  //En la primer variable del corchete es el valor q va tomar el useState, ocea, en este caso "user" va tomar "null"
  //todos los que empiezan con "use", son un ¿¿hock...??,
  useEffect(() => {
      //destructuracion -> nos permite obtener la propiedad deseada, van entre llaves

      const session = supabase.auth.getSession();
      setUser(session?.user)

      const {
        data: {subcription}
      } = supabase.auth.onAuthStateChange((event, session) => {
        switch (event) {
          case "SIGNED_IN":
            setUser(session?.user);
            break;
          case "SIGNED_OUT":
            setUser(null);
            break;
          default:
            console.log("Caso no estimado")
      }
      });
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  
  
  

return (
    <>
      {user ?(
        <div>
          <h2>Authenticated</h2>
          <button onClick={handleLogout}>logout</button>
          
        </div>
        ) : (
          <button onClick={handleLogin}>Log in</button>
        )}
      <Header />
      <button onClick={handleLogin}>Sign in GitHub</button>
      <Post
        titulo={"Capibara"}
        desciption={"Un Capibara"}
        link={
          "/home/etec/Documentos/Blog/react/vite-project/src/imagenes/1725558403006.jpg"
        }
        parrafo={"Este es un Capibara de internet"}
      />
      <Footer />
    </>
  );
}
