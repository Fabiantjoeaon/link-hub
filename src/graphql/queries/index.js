import {gql, graphql} from 'react-apollo';
import fragments from './fragments';

export const getAllGroups = gql`
    query getAllGroups {
        allGroups {
            ...fullGroup
        }
    }
    ${fragments.fullGroup}
`;

export const withAllGroups = graphql(getAllGroups, {
    props: ({ownProps, data: {loading, allGroups}}) =>
        ({
            loading,
            groups: allGroups
        })
});

export const getAllLinksForGroup = gql`
    query getAllLinksForGroup($groupId: ID!) {
        allLinks(filter: {
            group: {
                id: $groupId
            }
        }) {
            id,
            url,
            description
        }
    }
`;