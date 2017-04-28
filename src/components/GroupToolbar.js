import React from 'react';
import styled from 'styled-components';

import withDeleteGroup from '../graphql/mutations/deleteGroup';

const StyledGroupToolbar = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 25%;
    height: 30px;
    display: flex;
    flex-flow: row nowrap;
    opacity: ${props => props.hovered ? '1' : '0'};
    transition: opacity 0.2s ease-out;
    will-change: opacity;
    justify-content: space-between;

    span {
        color: ${props => props.color};
        font-size: 0.9em;
        font-weight: 900;
    }
`;

const GroupToolbar = ({color, hovered, deleteGroup, id}) => (
    <StyledGroupToolbar hovered={hovered} color={color}>
        <span>X</span>
        <span>+</span>
        <span onClick={() => {deleteGroup(id)}}>X</span>
    </StyledGroupToolbar>
);

export default withDeleteGroup(GroupToolbar);