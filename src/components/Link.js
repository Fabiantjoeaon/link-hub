import React from 'react';
import styled from 'styled-components';
import {withDeleteLink} from '../graphql/mutations';

import colorLuminance from '../lib/colorLuminance';

const StyledLink = styled.tr `
    td {    
        background-color: #fff;
        padding: 10px 0px;   
        white-space: nowrap;
        span {
            font-size: 0.8em;
            font-weight: 900;
            display: block;
            margin: 0 auto;
            width: 100%;
            text-align: center;
            color: ${props => props.darkerColor};
        }
    }
`;

const StyledImage = styled.td `
    padding: 0px;
    width: 40px;
    img {
        display: block;
        margin: 0 auto;
        height: 100%;
    }
`;

const StyledNameAndUrl = styled.td `
    max-width: 40px;
    overflow: hidden;
    
    a {
        color: ${props => props.color};
        font-size: 0.9em;
        font-weight: 400;
        text-decoration: none;
    }

    small {
        font-size: 0.7em;
        color: ${props => props.color};
        font-weight: 100;
    }
    a, small {
        display: block;
        padding-left: 10px;
    }
`;

const Link = ({
    id,
    color,
    url,
    description,
    mutate,
    groupId
}) => {
    const darkerColor = colorLuminance(color, -0.2);
    return (
        <StyledLink darkerColor={darkerColor}>
            <StyledImage>
                <img src={`http://www.google.com/s2/favicons?domain=${url}`} />
            </StyledImage>
            <StyledNameAndUrl color={darkerColor}>
                <a target="_blank" href={url}>{description}</a>
                <small>{url}</small>
            </StyledNameAndUrl>
            <td>
                <span
                    id={groupId}
                    onClick={() => mutate({variables: {
                        id
                    }})}>X</span>
            </td>
        </StyledLink>
    )
};

export default withDeleteLink(Link);