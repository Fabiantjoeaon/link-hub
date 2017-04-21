import {gql, graphql} from 'react-apollo';
import {getAllGroups, getAllLinksForGroup} from '../queries';

const createLink = gql `
    mutation createLink($url: String!, $description: String!, $group: ID!) {
        createLink(url: $url, description: $description, groupId: $group) {
            id
        }
    }
`;

const deleteLink = gql `
    mutation deleteLink($id: ID!) {
        deleteLink(id: $id) {
            id
        }
    }
`;

export const withCreateLink = graphql(createLink, {
    options: {
        refetchQueries: [
            {
                query: getAllGroups
            }
        ]
    }
});

export const withDeleteLink = graphql(deleteLink, {
    options: (props) => {
        refetchQueries : [
            {
                query: getAllLinksForGroup,
                variables: {
                    groupId: props.groupId
                }
            }
        ]
    }
});
