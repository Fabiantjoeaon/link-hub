import {gql, graphql} from 'react-apollo';
import {getAllGroups} from '../queries';

const moveLinkToGroup = gql `
    mutation moveLinkToGroup($id: ID!, $group: ID) {
        updateLink(id: $id, groupId: $group) {
            __typename,
            id,
            group {
                id,
                name
            }
        }
    }
`;

const withMoveLinkToGroup = graphql(moveLinkToGroup, {
    props({ownProps, mutate}) {
        return {
            moveLinkToGroup(id, group, prevGroup) {
                return mutate({
                    variables: {
                        id,
                        group
                    },
                    optimisticResponse: {
                        __typename: 'Link',
                        id,
                        group: {
                            id: group
                        }
                    },
                    fragments: [],
                    update: (proxy, mutationResult) => {
                        const query = getAllGroups;
                        const data = proxy.readQuery({query});

                        // TODO: This can be simpler?
                        data.allGroups.map(groupData => {
                            // Remove link from previous group
                            if (groupData.id == prevGroup) {
                                groupData.links.map((link, i) => {
                                    if (link.id == id) 
                                        groupData.links.splice(i, 1);
                                })
                            }

                            // Add link to new group
                            if (groupData.id == group) {
                                groupData.links.push(mutationResult.data.updateLink);
                            }
                        });

                        proxy.writeQuery({
                            query,
                            data
                        });
                    }
                })
            }
        }
    }
});

export default withMoveLinkToGroup;