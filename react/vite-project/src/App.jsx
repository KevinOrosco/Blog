import Footer from "./components/Footer";
import Header from "./components/Header";
import  Post  from "./components/Post";
import { useEffect, useState } from "react";
import supabase from "./lib/helper/supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);
  //useEffect depende de las variables que se van actualizando a medida del codigo, estas son llamadas dependencias, el useEffect es capaz de ejecutarse una unica vez al inicio del codigo en caso de que se lo llame. su funcion es ejecutar y renderizar
  //En la primer variable del corchete es el valor q va tomar el useState, ocea, en este caso "user" va tomar "null"
  //todos los que empiezan con "use", son un ¿¿hock...??,
  useEffect(() => {
    const getSession = async () => {
      //destructuracion -> nos permite obtener la propiedad deseada, van entre llaves

      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }

      
    };
    getSession();
  }, []);

  const handleLogin = async () => {
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }

    
  };

  return (
    <>
      <Header />
      <button onClick={handleLogin}>Sign in GitHub</button>
      <Post
        titulo={"Capibara"}
        desciption={"Un Capibara"}
        link={
          "react/vite-project/src/imagenes/1725558403006.jpg"
        }
        parrafo={"Este es un Capibara de internet"}
      />
      <Footer />
    </>
  );
}
