import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {DropTarget} from 'react-dnd';

import GroupLinksList from '../components/GroupLinksList';

const StyledGroup = styled.div`
    min-width: calc((100% / 4) - 8px * 2);
    max-width: calc((100% / 4) - 8px * 2);

    @media(max-width: 1000px) {
        min-width: calc((100% / 3) - 8px * 2);
        max-width: calc((100% / 3) - 8px * 2);
    }

    @media(max-width: 768px) {
        min-width: calc((100% / 2) - 8px * 2);
        max-width: calc((100% / 2) - 8px * 2);
    }

    @media(max-width: 630px) {
        min-width: calc((100% / 1) - 8px * 2);
        max-width: calc((100% / 1) - 8px * 2);
    }

    background-color: ${props => props.color};
    height: calc(20em - 10px * 2);
    margin: 8px;
    transition: background-color 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    font-family: 'Work Sans', sans-serif;
    cursor: pointer;
    
    span, h1 {
        display: inline-block;
    }
    
    span {
        color: #fff;
        font-weight:400;
        float: right;
        font-size: 1.5em;
    }
        
    h1 {
        color: #fff;
        text-align: left;
        width: 85%;
        margin: 0 auto;
        font-size: 1.2em;
        font-weight: 400;
        padding: 15px 10px;
        display: block;

    }
`;

const Group = ({
    id,
    name,
    color,
    links,
    onGroupMouseEnterHandler,
    onGroupMouseLeaveHandler
}) => (
    <StyledGroup
        onMouseEnter={() => {onGroupMouseEnterHandler(color)}}
        onMouseLeave={() => {onGroupMouseLeaveHandler()}}
        color={color}>
        <h1>{name}</h1>
        <GroupLinksList groupId={id} color={color} links={links} />
    </StyledGroup>
);


export default Group;