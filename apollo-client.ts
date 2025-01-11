import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// Define the GraphQL API URI
const GRAPHQL_API_URI = "http://localhost:3001/graphql";

// Error Handling Link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// HTTP Link for the API
const httpLink = new HttpLink({
  uri: GRAPHQL_API_URI,
  headers: {
    "Content-Type": "application/json",
    // You can pass authentication tokens here if needed
    // Authorization: `Bearer ${yourToken}`,
  },
});

// Combine Links
const link = from([errorLink, httpLink]);

// Apollo Client Configuration
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
