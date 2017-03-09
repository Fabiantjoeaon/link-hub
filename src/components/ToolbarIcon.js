import React from 'react';
import styled from 'styled-components';

const StyledToolbarIcon = styled.div`
    width: 75px;
    height: 75px;
    background-color: #525252; 
    border-radius: 50%;
    cursor: pointer;
    
    p {
        color: #f2f2f2;
        top: 50%;
        text-align: center;
    }
`;

const ToolbarIcon = ({action, onToolbarIconClick}) => (
    <StyledToolbarIcon onClick={() => {onToolbarIconClick()}}>
        <p>{action}</p>
    </StyledToolbarIcon>
);

export default ToolbarIcon;