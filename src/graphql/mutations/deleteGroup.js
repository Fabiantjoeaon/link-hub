import {gql, graphql} from 'react-apollo';
import {getAllGroups} from '../queries';
import update from 'immutability-helper';
import findIndex from 'lodash/findIndex';

const deleteGroup = gql `
    mutation deleteGroup($id: ID!) {
        deleteGroup(id: $id) {
            __typename,
            id
        }
    }
`;

const withDeleteGroup = graphql(deleteGroup, {
    props({ownProps, mutate}) {
        return {
            deleteGroup(id) {
                return mutate({
                    variables: {
                        id
                    },
                    updateQueries: {
                        getAllGroups: (prev, {mutationResult}) => {
                            const deleteIndex = [].concat.apply([], prev.allGroups.map(g => g.id)).indexOf(id);

                            if (deleteIndex < 0) 
                                return prev;
                            
                            return update(prev, {
                                allGroups: {
                                    $splice: [[deleteIndex, 1]]
                                }
                            });
                        }
                    }
                });
            }
        }
    }
});

export default withDeleteGroup;
