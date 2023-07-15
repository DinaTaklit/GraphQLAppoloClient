import { useQuery, gql } from "@apollo/client";
const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  console.log("before running the query", id);
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });
  console.log("after running the query");
  return {
    loading,
    error,
    data,
  };
};
