import {gql, graphql} from 'react-apollo';
import {getAllGroups} from '../queries';

const createGroup = gql`
    mutation createGroup($name: String!, $description: String!, $color: String!) {
        createGroup(name: $name, description: $description, color: $color) {
            __typename,
            id,
            name,
            description,
            color
        }
    }
`;

const withCreateGroup = graphql(createGroup, {
    props({ownProps, mutate}) {
        return {
            createGroup(name, description, color) {
                return mutate({
                    variables: {name, description, color},
                    optimisticResponse: {
                        createGroup: {
                            __typename: 'Group',
                            id: -1,
                            name,
                            description,
                            color,
                            createdAt: +new Date,
                        }
                    },
                    update: (proxy, mutationResult) => {
                        const query = getAllGroups;
                        const data = proxy.readQuery({query});

                        data.allGroups.push(mutationResult.data.createGroup);

                        proxy.writeQuery({
                            query,
                            data
                        })
                    }
                })
            }
        }
    }
})

export default withCreateGroup;