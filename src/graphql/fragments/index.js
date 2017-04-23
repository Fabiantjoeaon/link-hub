import {gql} from 'react-apollo';

const fullLink = gql`
    fragment fullLink on Link {
        id,
        url,
        description,
        createdAt,
        group {
            id
        }
    }
`;

const fullGroup = gql`
    fragment fullGroup on Group {
        id,
        name,
        description,
        color,
        createdAt,
        links {
            ...fullLink
        }
    } 
    ${fullLink}
`;

const fragments = {
    fullGroup,
    fullLink
}

export default fragments;



