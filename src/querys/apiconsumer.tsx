import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

interface Character {
  name: string;
  image: string;
}

interface CharactersData {
  characters: {
    info: {
      pages: number;
    };
    results: Character[];
  };
}

export async function getStaticProps(
  name: string,
  page: number
): Promise<CharactersData> {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query<CharactersData>({
    query: gql`
      query {
        characters(page: ${page}, filter: { name: "${name}" }) {
          info {
         pages
         next
         prev
       }
          results {
            name
            image
          }
        }
      }
    `,
  });

  return data;
}
