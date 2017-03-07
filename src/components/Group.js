import React from 'react';
import styled from 'styled-components';

const StyledGroup = styled.div`
    width: calc((100% / 4) - (10px * (4 * 2)));
    height: 15em;
    margin: 10px;
    display: inline-block;
    border: 1px solid #979797;
    border-radius: 15px;
`;

const Group = ({name, color}) => (
    <StyledGroup color={color}>
        {name}
    </StyledGroup>
);

export default Group;