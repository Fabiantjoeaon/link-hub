import {gql, graphql} from 'react-apollo';
import {getAllGroups} from '../queries';
import update from 'immutability-helper';
import findIndex from 'lodash/findIndex';

const deleteLink = gql `
    mutation deleteLink($id: ID!) {
        deleteLink(id: $id) {
            __typename,
            id,
            group {
                id
            }
        }
    }
`;

const withDeleteLink = graphql(deleteLink, {
    props({ownProps, mutate}) {
        return {
            deleteLink(id) {
                return mutate({
                    variables: {
                        id
                    },
                    updateQueries: {
                        getAllGroups: (prev, {mutationResult}) => {
                            // [].concat.apply([], array) to flatten multidimensional array
                            const deleteIndex = [].concat.apply([], prev.allGroups.map(g => g.links.map(l => l.id))).indexOf(id);

                            if (deleteIndex < 0) 
                                return prev;
                            
                            return update(prev, {
                                allGroups: {
                                    [ownProps.groupIterator]: {
                                        links: {
                                            $splice: [[deleteIndex, 1]]
                                        }
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    }
});

export default withDeleteLink;
