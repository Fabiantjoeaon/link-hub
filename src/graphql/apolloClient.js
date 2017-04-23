import {ApolloClient, createNetworkInterface} from 'react-apollo';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({uri: 'https://api.graph.cool/simple/v1/cj0nw22hyqow30118qhmtaz4p'}),
    dataIdFromObject: (result) => {
        if (result.id && result.__typename) {
            return result.__typename + ':' + result.id;
        }
        return null;
    },
    addTypename: true,
    connectToDevTools: true
});

export default client;