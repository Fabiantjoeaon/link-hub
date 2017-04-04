import React from 'react';
import styled from 'styled-components';
import {withDeleteLink} from '../graphql/mutations';

const StyledLink = styled.li`
    list-style-type: none;
    margin:10px 0px;
    padding: 0px 30px 0px 25px;
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    font-weight: 100;
    font-size: 0.9em;
    display: flex;
    flex-flow: row no-wrap;
    justify-content: space-between;
    
    a {
        color: #fff;
        text-decoration: none;
        text-align: left;
        &:visited {
            color: #fff;
        }
    }
    
    &:hover {
        
    }
    
    img {
        width: 16px;
        height: 16px;
    }
    
    span {
        font-size: 0.7em !important;
        color: #${props => props.color};
        margin: 0px !important;
        padding: 5px !important;
        background-color: #fff;
    }
`;

const Link = ({id, color, url, description, mutate, groupId}) => (
    <StyledLink>
        <img src={`http://www.google.com/s2/favicons?domain=${url}`}/>
        <a target="_blank" href={url}>{description}</a>
        <span color={color} id={groupId} onClick={() => mutate({variables: {id}})}
        >X</span>
    </StyledLink>
);

export default withDeleteLink(Link);