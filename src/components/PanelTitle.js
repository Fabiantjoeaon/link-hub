import React from 'react';
import styled from 'styled-components';

const StyledPanelTitleContainer = styled.div`
    margin-bottom: 20px;
`;

const StyledPanelTitle = styled.h2`
    position: relative;
    width: 100%; 
    display: inline-block;
    color: #fff;
    padding-top: 20px;
    box-sizing: border-box;
    font-size: 1.8em;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    margin-bottom: 5px;
`;

const StyledSubTitle = styled.p`
    font-weight: 100;
    font-size: 1.2em;
    color: #fff;
`;

const PanelTitle = ({title, subtitle}) => (
    <StyledPanelTitleContainer>
        <StyledPanelTitle>{title}</StyledPanelTitle>
        <StyledSubTitle>{subtitle}</StyledSubTitle>
    </StyledPanelTitleContainer>
);

export default PanelTitle;