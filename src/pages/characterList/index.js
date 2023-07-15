import "./style.css";
import { Link } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";

export default function CharactersList() {
  const { loading, error, data } = useCharacters();
  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>Loading ...</div>;
  }
  console.log("data", data);
  return (
    <div className="characterList">
      {data.characters.results.map((character) => (
        <Link to={`/characters/${character.id}`} key={character.id}>
          <img src={character.image} />
          <h2>{character.name}</h2>
        </Link>
      ))}
    </div>
  );
}
