import React from 'react';
import styled from 'styled-components';

const StyledToolbarIcon = styled.div`
    width: 75px;
    height: 75px;
    background-color: #525252; 
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.5s ${props => props.visible ? '0s' : '0.3s'} cubic-bezier(0.68, -1.3, 0.265, 1.85);
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
    isBottomPanelVisible,
    path
}) => (
    <StyledToolbarIcon
        onClick={() => {
            onToolbarIconClick(path)
        }}
        visible={isBottomPanelVisible}
    >
        <p>{action}</p>
    </StyledToolbarIcon>
);

export default ToolbarIcon;