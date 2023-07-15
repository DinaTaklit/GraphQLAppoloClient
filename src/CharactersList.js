import { useQuery, gql } from "@apollo/client";
const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function CharactersList() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
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
        <div key={character.id}>
          <img src={character.image} />
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
}
