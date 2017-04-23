import {gql, graphql} from 'react-apollo';
import update from 'immutability-helper';
import {getAllGroups, getAllLinks} from '../queries';

// TODO: Link fragment
const createLink = gql `
    mutation createLink($url: String!, $description: String!, $group: ID!) {
        createLink(url: $url, description: $description, groupId: $group) {
            __typename,
            id,
            url,
            description,
            group {
                id
            }
        }
    }
`;

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
                    optimisticResponse: {
                        createLink: {
                            __typename: 'Link',
                            id: -1,
                            url,
                            description,
                            createdAt: +new Date,
                            group: {
                                id: group
                            }
                        }
                    },
                    update: (proxy, mutationResult) => {
                        const query = getAllGroups;
                        const data = proxy.readQuery({query});

                        data.allGroups.map((groupData) => {
                            if(groupData.id == group)
                                groupData.links.push(mutationResult.data.createLink);
                        });

                        proxy.writeQuery({
                            query,
                            data
                        })
                    }
                })
            }
        }
    }
});

export const withDeleteLink = graphql(deleteLink);
