import React from 'react';
import styled from 'styled-components';

const StyledSVGIcon = styled.div`
    border-radius: 50%;
    cursor: pointer;
`;

const SvgIcon = ({onClickHandler, path, children}) => (
    <StyledSVGIcon onClick={() => {onClickHandler(path)}}>
        {children}
    </StyledSVGIcon>
);

export default SvgIcon;
