import {gql} from 'react-apollo';
import fragments from './fragments';

export const getAllGroups = gql`
    query getAllGroups {
        allGroups {
            ...fullGroup
        }
    }
    ${fragments.fullGroup}
`;

export const getAllLinks = gql`
    query getAllLinks {
        allLinks {
            ${fragments.fullLink}
        }
    }  
`;