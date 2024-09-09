export default function Post({ Titulo, link, description, Parrafo }) {
  return (
    <>
      <h2>{Titulo}</h2>
      <img src={link} alt={description} />
      <p>{Parrafo}</p>
    </>
  );
}
