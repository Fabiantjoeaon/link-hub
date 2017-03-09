import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.li`
    list-style-type: none;
    margin:0;
    padding: 0;
    color: #525252;
    font-family: 'Work Sans', sans-serif;
    font-weight: 100;
    font-size: 1.2em;
`;

const Link = ({ url, description }) => (
    <StyledLink>{url}</StyledLink>
);

export default Link;