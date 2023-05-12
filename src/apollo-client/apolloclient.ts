import {ApolloClient, InMemoryCache, from, HttpLink} from '@apollo/client';
 
const GRAPHQL_ENDPOINT = 'https://secret-chat.hasura.app/v1/graphql';
 
const apolloClient = (token: any) => {
    const localToken = "asojhdfoasdfjasdfas";
    const link = new HttpLink({
        uri: GRAPHQL_ENDPOINT,
        headers: {
            access_token: `Bearer ${localToken || token}`,
        },
    });
    console.log("Connection status", link);
    return new ApolloClient({
        link: from([link]),
        cache: new InMemoryCache(),
    });
};

export default apolloClient;