import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://good-mink-96.hasura.app/v1/graphql', // 替换为你的 Hasura GraphQL 端点
        headers: {
            'x-hasura-admin-secret': 'PCNI1RxLtWR1p0dD76gV1zodjeqErKpkMcCKdbgnw5uLCvaQoMTdVmwmzBN50Jyc', // 替换为你的 Hasura 管理员密钥
        },
    }),
    cache: new InMemoryCache(),
});

export default client;