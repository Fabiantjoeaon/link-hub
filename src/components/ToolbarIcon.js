import React, {Component} from 'react';
import styled from 'styled-components';
import bindAll from 'lodash/bindAll';

import {TweenLite} from 'gsap';

const StyledToolbarIcon = styled.div`
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.5s ${props => props.visible ? '0s' : '0.3s'} cubic-bezier(0.68, -1.3, 0.265, 1.85);
    transform: ${props => props.visible ? 'translateY(200px)' : 'translateY(0px)'};
    will-change: transform;
`;

const PlusIcon = () => (
    <svg width="75" height="75" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
        <path
            id="Plusicon"
            d="M40.664 36.06V18h-4.956v18.06H17.372v4.88h18.336V59h4.956V40.94H59v-4.88H40.664zM38 73C18.67 73 3 57.33 3 38S18.67 3 38 3s35 15.67 35 35-15.67 35-35 35z"
            fill="#525252" fillRule="evenodd"/>
    </svg>
)

const ToolbarIcon = ({
    onToolbarIconClick,
    isBottomPanelVisible,
    path
}) => (
    <StyledToolbarIcon
        visible={isBottomPanelVisible}
        onClick={() => {
            onToolbarIconClick(path)
        }}
    >
        <PlusIcon/>
    </StyledToolbarIcon>
)

export default ToolbarIcon;

