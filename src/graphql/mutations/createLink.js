import {gql, graphql} from 'react-apollo';
import {getAllGroups} from '../queries';

//TODO: Fragment here
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

const withCreateLink = graphql(createLink, {
    props({ownProps, mutate}) {
        return {
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
                            createdAt: + new Date,
                            group: {
                                id: group
                            }
                        }
                    },
                    fragments: [],
                    update: (proxy, { data: {createLink} }) => {
                        const query = getAllGroups;
                        const data = proxy.readQuery({query});

                        data.allGroups.map((groupData) => {
                                if (groupData.id == group) 
                                    groupData.links.push(createLink);
                                }
                            );

                        proxy.writeQuery({query, data})
                    }
                })
            }
        }
    }
});

export default withCreateLink;