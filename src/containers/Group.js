import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {DropTarget} from 'react-dnd';

import GroupLinksList from '../components/GroupLinksList';
import {getLinksByGroup} from '../reducers/linksReducer';

const StyledGroup = styled.div`
    width: calc(100% / 4);
    height: 25em;
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    position: relative;
    font-family: 'Work Sans', sans-serif;
    
    &:hover {
        cursor: pointer;
        max-width: 60% !important;
        background-color: #f2f2f2;
        
        h1 {
            color: #525252;
        }
    }
    
    span, h1 {
        display: inline-block;
    }
    
    span {
        margin: 15px 20px 0px 0px;
        padding: 10px 25px;
        background-color: ${props => props.color};
        color: #f2f2f2;
        font-weight:400;
        float: right;
        font-size: 1.5em;
    }
        
    h1 {
        color: #525252;
        text-align: right;
        margin: 0;
        padding: 20px 25px;
        font-size: 1.3em;
        font-weight: 400;
        text-transform: uppercase;
    }
`;

const _Group_ = ({
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
        <GroupLinksList links={links} />
    </StyledGroup>
);

const mapStateToProps = (state, ownProps) => {
    return {
        links: getLinksByGroup(state, ownProps.name)
    }
};

const Group = connect(
    mapStateToProps
)(_Group_);

export default Group;