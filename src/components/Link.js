import React from 'react';
import styled from 'styled-components';
import {withDeleteLink} from '../graphql/mutations';

import colorLuminance from '../lib/colorLuminance';

const StyledLink = styled.tr `
    background-color: ${props => props.linkBackgroundColor};
    td {        
        padding: 10px 0px;   
        white-space: nowrap;
        span {
            font-size: 1em;
            font-weight: 100;
            display: block;
            margin: 0 auto;
            width: 100%;
            text-align: center;
            color: 
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
        color: #fff;
        font-size: 0.9em;
        font-weight: 400;
        text-decoration: none;
    }

    small {
        font-size: 0.7em;
        color: #fff;
        font-weight: 100;
    }
    a, small {
        display: block;
        padding-left: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 90%;
    }
`;

const Link = ({
    i,
    id,
    color,
    url,
    description,
    mutate,
    groupId
}) => {
    const darkerColor1 = colorLuminance(color, -0.1);
    const darkerColor2 = colorLuminance(color, -0.125);
    const linkBackgroundColor = i % 2 == 0 ? darkerColor1 : darkerColor2; 
    return (
        <StyledLink linkBackgroundColor={linkBackgroundColor}>
            <StyledImage>
                <img src={`http://www.google.com/s2/favicons?domain=${url}`} />
            </StyledImage>
            <StyledNameAndUrl color={darkerColor1}>
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