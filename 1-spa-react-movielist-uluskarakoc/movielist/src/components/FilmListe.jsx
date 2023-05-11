function FilmListe(props) {
  
  return (
    <div>
      <h2>{props.maintext}</h2>

      <ul>
        {props.filmen.map((film) => (
          <li key={crypto.randomUUID()}>
            <h2>{film.titel}</h2>
            <p>{film.beschreibung}</p>
            <p>{film.bewertung}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FilmListe;
