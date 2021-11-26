//import logo from './logo.svg';
import './App.css';
import { ApolloClient,  InMemoryCache,  ApolloProvider,  useQuery,  gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache(),
});

const App = () => (
    <ApolloProvider client={client}>
        <Routing />
    </ApolloProvider>
);

export default App;
