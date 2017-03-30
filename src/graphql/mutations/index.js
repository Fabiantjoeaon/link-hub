import {gql, graphql} from 'react-apollo';

const createLink = gql`
    mutation createLink($url: String!, $description: String!, $groupId: ID!) {
        createLink(url: $url, description: $description, groupId: $groupId) {
            id
        }
    }
`;

export const withCreateLink = graphql(createLink);
