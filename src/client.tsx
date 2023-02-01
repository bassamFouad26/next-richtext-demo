import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


export const client = new ApolloClient({
    uri: `https://caisy.io/api/v1/e/${process.env.CAISY_ID}/graphql`,
    headers: {
      "x-caisy-apikey": process.env.CAISY_API_KEY,
    },
      cache: new InMemoryCache(),

});