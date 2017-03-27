import {gql, graphql} from 'react-apollo';

const createLink = gql`
    mutation createLink($description: String!, $url: String!, $group: LinkgroupGroup) {
        createLink(description: $description, url: $url, group: $group) {
            id
        }
    }
`;

export const withCreateLink = graphql(createLink);