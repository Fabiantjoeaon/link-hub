import React from 'react';
import styled from 'styled-components';
import {DropTarget} from 'react-dnd';

const StyledGroup = styled.div`
    width: calc(100% / 4);
    height: 20em;
    display: inline-block;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    
    &:hover {
        cursor: pointer;
        color: #fff;
        max-width: 60% !important;
        background-color: #f2f2f2;
        
        h1 {
            color: #525252;
        }
    }
    
    h1 {
        font-family: 'Work Sans', sans-serif;
        color: ${props => props.color};
        margin: 0;
        padding: 20px 25px;
        font-size: 1.3em;
        font-weight: 400;
        text-transform: uppercase;
    }
`;

const Group = ({
    name,
    color,
    onGroupMouseEnterHandler,
    onGroupMouseLeaveHandler
}) => (
    <StyledGroup
        onMouseEnter={() => {onGroupMouseEnterHandler(color)}}
        onMouseLeave={() => {onGroupMouseLeaveHandler()}}
        color={color}>
        <h1>{name}</h1>
    </StyledGroup>
);

export default Group;