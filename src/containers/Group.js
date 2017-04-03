import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {DropTarget} from 'react-dnd';

import GroupLinksList from '../components/GroupLinksList';

const StyledGroup = styled.div`
    min-width: calc((100% / 4) - 10px * 2);
    border-radius: 5px;
    background-color: ${props => props.color};
    height: calc(20em - 10px * 2);
    margin: 10px;
    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    font-family: 'Work Sans', sans-serif;
    
    &:hover {
        cursor: pointer;
        max-width: 60% !important;
        background-color: #ffffff;
        
        h1, span, li, a {
            color: #646464 !important;
        }
    }
    
    span, h1 {
        display: inline-block;
    }
    
    span {
        margin: 15px 20px 0px 0px;
        padding: 10px 25px;
        color: #f2f2f2;
        font-weight:400;
        float: right;
        font-size: 1.5em;
    }
        
    h1 {
        color: #fff;
        text-align: right;
        margin: 0;
        padding: 20px 25px;
        font-size: 1.1em;
        font-weight: 100;
        text-transform: uppercase;
    }
`;

const Group = ({
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
        <span>{links.length}</span>
        <GroupLinksList color={color} links={links} />
    </StyledGroup>
);


export default Group;