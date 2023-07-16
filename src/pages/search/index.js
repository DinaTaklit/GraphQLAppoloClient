import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
const GET_CHARACTER_Location = gql`
  query getCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");
  const handleSearchText = (e) => {
    setName(e.target.value);
  };

  const [getCharacterLocation, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_Location,
    {
      variables: {
        name: name,
      },
    }
  );

  return (
    <div>
      <h2>Search about a character</h2>
      <input value={name} onChange={handleSearchText} />
      <button onClick={() => getCharacterLocation()}>Search</button>
      {loading && <p>Loading ...</p>}
      {error && <p>error ...</p>}
      {data && (
        <ul>
          {data.characters.results.map((character) => (
            <li key={character.id}>{character.location.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
