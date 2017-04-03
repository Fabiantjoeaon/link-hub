import React from 'react';
import styled from 'styled-components';
import {withDeleteLink} from '../graphql/mutations';

const StyledLink = styled.li`
    list-style-type: none;
    margin:10px 0px;
    padding-left: 25px;
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    font-weight: 100;
    font-size: 0.9em;
    
    a {
        color: #fff;
        text-decoration: none;
        &:visited {
            color: #fff;
        }
    }
`;

const Link = ({ id, url, description, mutate }) => (
    <StyledLink><a target="_blank" href={url}>{description}</a>
        <span onClick={() => mutate({variables: {id}})}>DELETE</span>
    </StyledLink>
);

export default withDeleteLink(Link);