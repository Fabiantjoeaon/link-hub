import {gql, graphql} from 'react-apollo';
import update from 'immutability-helper';
import {getAllGroups, getAllLinksForGroup} from '../queries';

const createLink = gql `
    mutation createLink($url: String!, $description: String!, $group: ID!) {
        createLink(url: $url, description: $description, groupId: $group) {
            id,
            group {
                id
            }
        }
    }
`;

const deleteLink = gql `
    mutation deleteLink($id: ID!) {
        deleteLink(id: $id) {
            id,
            group {
                id
            }
        }
    }
`;

export const withCreateLink = graphql(createLink, {
    // Mutate normally gets passed as prop to wrapped component
    props({ownProps, mutate}) {
        return {
            // But for updating the store we're actually hijacking mutate to a custom function        
            createLink(url, description, group) {
                return mutate({
                    variables: {
                        url,
                        description,
                        group
                    },
                    updateQueries: {
                        getAllGroups: (prev, {mutationResult}) => {
                            const newLink = mutationResult.data.createLink;
                            return update(prev, {
                                allGroups: {
                                    $push: [newLink]
                                }
                            })
                        }
                    }
                })
            }
        }
    }
});

export const withDeleteLink = graphql(deleteLink, {
    options: (props) => {
        return {
            refetchQueries: [
                {
                    query: getAllLinksForGroup,
                    variables: {
                        groupId: props.groupId
                    }
                }
            ]
        }
    }
});
