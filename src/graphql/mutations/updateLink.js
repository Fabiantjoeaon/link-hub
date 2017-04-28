import {gql, graphql} from 'react-apollo';
import {getAllGroups} from '../queries';

const moveLinkToGroup = gql `
    mutation moveLinkToGroup($id: ID!, $group: ID) {
        updateLink(id: $id, groupId: $group) {
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

const withMoveLinkToGroup = graphql(moveLinkToGroup, {
    props({ownProps, mutate}) {
        return {
            moveLinkToGroup(id, newGroup, prevGroup) {
                return mutate({
                    variables: {
                        id,
                        group: newGroup
                    },
                    optimisticResponse: {
                        id,
                        group: {
                            id: newGroup
                        },
                        __typename: 'Link',
                    },
                    fragments: [],
                    update: (proxy, { data: { updateLink }}) => {
                        const query = getAllGroups;
                        const data = proxy.readQuery({query});
                        
                        data.allGroups.map(groupData => {
                            // Remove link from previous group
                            if (groupData.id == prevGroup) 
                                groupData.links.map((link, i) => {
                                    if (link.id == id) 
                                        groupData.links.splice(i, 1);
                                })
                            
                            // Add link to new group
                            if (groupData.id == newGroup) 
                                groupData.links.push(updateLink);
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