import React from 'react';
import styled from 'styled-components';
import shadeColor from '../lib/shadeColor';
import {DropTarget} from 'react-dnd';

const StyledGroup = styled.div`
    width: calc(100% / 4);
    height: 20em;
    display: inline-block;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    border: 1px solid ${props => props.color};
    
    &:hover {
        cursor: pointer;
        color: #fff;
        max-width: 60% !important;
        background-color: #f2f2f2;
    }
    
    h1 {
        font-family: 'Work Sans', sans-serif;
        color: #000;
        margin: 0;
        padding: 10px 15px;
        font-size: 1.3em;
        font-weight: 100;
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