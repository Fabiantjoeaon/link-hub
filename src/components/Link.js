import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import styled from 'styled-components';
import {DragSource} from 'react-dnd';

import withDeleteLink from '../graphql/mutations/deleteLink';
import colorLuminance from '../lib/colorLuminance';

const StyledLink = styled.tr `
    background-color: ${props => props.isDragging
    ? '#fff'
    : props.linkBackgroundColor};
    transition: background-color 0.3s ease-out;
    position: relative;
    
    &:hover {
        background-color: ${props => props.onLinkHoverBackgroundColor};
    }

    td {        
        position: relative;
        padding: 10px 0px;   
        white-space: nowrap;
        span {
            font-size: 1em;
            font-weight: 100;
            display: block;
            margin: 0 auto;
            width: 100%;
            text-align: center;
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
        cursor: pointer;
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

const DeleteLinkOverlay = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    width: ${props => props.width} !important;
    height: 100%;
    display:${props => props.showDelete
    ? 'flex'
    : 'none'};
    flex-flow: row nowrap;
    justify-content: space-between;
    line-height: 100%;
    padding: 0px;
    overflow: hidden;
    transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

    p { 
        font-size: 0.7em;
        margin: 0 auto !important;
        text-align: center !important;
        padding-top: 15px;
        height: 100%;
        width: 50%;
        color: #fff !important;
        background-color: ${props => props.color};
        transition: background-color 0.3s ease-out;
        &:hover {
            background-color: ${props => props.hoverColor};
        }
    }
`;

export const ItemTypes = {
    LINK: 'link'
};

const linkSource = {
    beginDrag(props) {
        return {
            linkId: props.id,
            prevGroup: props.groupId
        }
    },
    endDrag(props, monitor) {
        if (!monitor.didDrop()) {
            return;
        }
    }
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Link extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDelete: 0,
            linkWidth: 0
        }
    }

    componentDidMount() {
        const node = findDOMNode(this);
        this.setState({linkWidth: node.clientWidth});
    }
    render() {
        const {
            id,
            color,
            url,
            description,
            groupId,
            deleteLink,
            isDragging,
            connectDragSource
        } = this.props;

        const {showDelete, linkWidth} = this.state;
        const darkColor = colorLuminance(color, -0.05);
        const darkerColor = colorLuminance(color, -0.2);

        return (
            <StyledLink
                linkBackgroundColor={darkColor}
                onLinkHoverBackgroundColor={darkerColor}
                showDelete={showDelete}
                isDragging={isDragging}>
                <StyledImage>
                    <img src={`http://www.google.com/s2/favicons?domain=${url}`}/>
                </StyledImage>
                <StyledNameAndUrl>
                    <a target="_blank" href={url}>{description}</a>
                    <small>{url}</small>
                </StyledNameAndUrl>
                <td
                    ref={instance => connectDragSource(findDOMNode(instance))}
                    onClick={() => {
                    this.setState({
                        showDelete: !showDelete
                    })
                }}>
                    <span>+</span>
                    <DeleteLinkOverlay
                        color={darkerColor}
                        hoverColor={colorLuminance(color, -0.4)}
                        showDelete={showDelete}
                        width={linkWidth}>
                        <p onClick={() => deleteLink(id)}>Delete</p>
                        <p
                            onClick={() => this.setState({
                            showDelete: !showDelete
                        })}>Never mind</p>
                    </DeleteLinkOverlay>
                </td>
            </StyledLink>
        )
    }
}

Link.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
}

export default withDeleteLink(DragSource(ItemTypes.LINK, linkSource, collect)(Link));