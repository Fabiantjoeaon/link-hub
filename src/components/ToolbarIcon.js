import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';

const StyledToolbarIcon = styled(Link)`
    width: 75px;
    height: 75px;
    background-color: #525252; 
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.68, -1.3, 0.265, 1.85);
    transform: ${props => props.visible ? 'translateY(200px)' : 'translateY(0px)'};
    will-change: transform;
    
    p {
        color: #f2f2f2;
        top: 50%;
        text-align: center;
    }
`;

const ToolbarIcon = ({
    action,
    onToolbarIconClick,
    isBottomPanelVisible
}) => (
    <StyledToolbarIcon
        onClick={() => {
            onToolbarIconClick()
        }}
        visible={isBottomPanelVisible}
        to='add_link'
    >
        <p>{action}</p>
    </StyledToolbarIcon>
);

export default ToolbarIcon;