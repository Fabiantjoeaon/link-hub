import React, {Component} from 'react';
import styled from 'styled-components';

import {easeOutQuart} from '../lib/cssEasings';

const StyledSVGIcon = styled.div`
    border-radius: 50%;
    cursor: pointer;
    will-change: transform;
`;

const StyledToolbarIcon = styled(StyledSVGIcon)`
    transition: transform 0.5s ${props => props.visible ? '0s' : '0.3s'} cubic-bezier(0.68, -1.3, 0.265, 1.85);
    transform: ${props => props.visible ? 'translateY(200px)' : 'translateY(0px)'};
`;

const StyledBottomPanelIcon = styled(StyledSVGIcon)`
    transition: transform 0.4s ${props => !props.visible ? '0s' : '0.75s'} ${easeOutQuart};
    transform: ${props => !props.visible ? 'translateX(300px)' : 'translateX(0px)'};
`;

const SvgIcon = ({
    onSvgIconClick,
    isBottomPanelVisible,
    path,
    children,
    layout
}) => (
    layout === 'Toolbar' ?
        <StyledToolbarIcon
            visible={isBottomPanelVisible}
            onClick={() => {onSvgIconClick(path)}}>
            {children}
        </StyledToolbarIcon> :
        <StyledBottomPanelIcon
            visible={isBottomPanelVisible}
            onClick={() => {onSvgIconClick(path)}}>
            {children}
        </StyledBottomPanelIcon>

)

export default SvgIcon;

