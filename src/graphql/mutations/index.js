import {gql, graphql} from 'react-apollo';

const createLink = gql`
    mutation createLink($url: String!, $description: String!, $groupId: ID!) {
        createLink(url: $url, description: $description, groupId: $groupId) {
            id
        }
    }
`;

const deleteLink = gql`
    mutation deleteLink($id: ID!) {
        deleteLink(id: $id) {
            id
        }
    }
`;

export const withCreateLink = graphql(createLink);
export const withDeleteLink = graphql(deleteLink);
