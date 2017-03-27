import { ApolloClient, createNetworkInterface } from 'react-apollo';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'https://api.graph.cool/simple/v1/cj0nw22hyqow30118qhmtaz4p'
    }),
    connectToDevTools: true
});

export default client;