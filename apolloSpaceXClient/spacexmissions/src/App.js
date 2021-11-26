//import logo from './logo.svg';
import './App.css';
import { ApolloClient,  InMemoryCache,  ApolloProvider,   } from "@apollo/client";
import Routing from './routesIndex'

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
