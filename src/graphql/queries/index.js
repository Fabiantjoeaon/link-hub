import {gql, graphql} from 'react-apollo';
import fragments from './fragments';

const getAllGroups = gql`
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