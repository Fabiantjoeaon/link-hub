import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {DropTarget} from 'react-dnd';
import colorLuminance from '../lib/colorLuminance';

import GroupLinksList from '../components/GroupLinksList';
import GroupSVGOverlay from '../components/GroupSVGOverlay';
import GroupToolbar from '../components/GroupToolbar.js';
import {ItemTypes} from '../components/Link';
import withMoveLinkToGroup from '../graphql/mutations/updateLink';

const StyledGroup = styled.div `
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
        min-width: calc((100% / 1) - 8px * 1);
        max-width: calc((100% / 1) - 8px * 1);
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
        margin: 0 auto;
        font-size: 1.1em;
        font-weight: 400;
        padding-top: 15px;
        padding-bottom: 5px;
    }
    
    h1, p {
        text-align: left;
        width: 85%;
        padding-left: 10px;
        padding-right: 10px;
        display: block;
        color: #fff;
        margin: 0 auto;
    }
    p {
        font-size: 0.8em;
        padding-left: 12px;
        margin-bottom: 20px;
        font-weight: 100;
    }

    svg {
        path {
            stroke-dashoffset: ${props => props.hovered ? '0' : '10000'};
            stroke-dasharray: 10000;
            will-change: stroke-dashoffset;
        }
    }
`;

const MoveAndDeleteNotice = styled.p `
    color: ${props => props.color} !important;
    opacity: ${props => props.hovered ? '1' : '0'};
    transition: opacity 0.5s ease-out;
    will-change: opacity;
    padding-bottom: 10px;
`;

const groupTarget = {
    drop(props, monitor, component) {
        if(monitor.didDrop()) {
            return
        }

        const {linkId, prevGroup} = monitor.getItem();
        props.moveLinkToGroup(linkId, props.id, prevGroup);
    }
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class Group extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false
        }
    }

    render() {
        const {
            i,
            id,
            name,
            color,
            description,
            links,
            onGroupMouseEnterHandler,
            onGroupMouseLeaveHandler,
            connectDropTarget,
            isOver
        } = this.props;

        return (
            <StyledGroup
                ref={instance => connectDropTarget(findDOMNode(instance))}
                onMouseEnter={() => {
                onGroupMouseEnterHandler(color);
                this.setState({hovered: 1})
            }}
                onMouseLeave={() => {
                onGroupMouseLeaveHandler();
                this.setState({hovered: 0})
            }}
                color={color}
                hovered={this.state.hovered}>
                <h1>{name}</h1>
                <p>{description}</p>
                <GroupSVGOverlay color={color}/>
                <GroupToolbar 
                    id={id}
                    hovered={this.state.hovered}
                    color={colorLuminance(color, -0.25)} />
                <GroupLinksList
                    groupIterator={i}
                    groupId={id}
                    color={color}
                    links={links
                    ? links
                    : []}/> 
                {links.length > 0 ? 
                    <MoveAndDeleteNotice 
                        hovered={this.state.hovered}
                        color={colorLuminance(color, -0.2)}>
                        Drag 
                        <b> +</b>,   
                        or click 
                        <b> + </b> 
                        to delete
                    </MoveAndDeleteNotice>
                : null}
            </StyledGroup>
        )
    }
};

Group.propTypes = {
    isOver: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired
}

export default withMoveLinkToGroup(DropTarget(ItemTypes.LINK, groupTarget, collect)(Group));