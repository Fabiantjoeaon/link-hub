import {gql, graphql} from 'react-apollo';

const updateLink = gql`
    mutation updateLink($id: ID!, $group: ID) {
        updateLink(id: $id, groupId: $group) {
            id
        }
    }
`;

const withUpdateLink = graphql(updateLink);

export default withUpdateLink;