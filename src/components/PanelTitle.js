import styled from 'styled-components';

const PanelTitle = styled.h2`
    position: relative;
    display: inline-block;
    font-size: 1.8em;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    margin-bottom: 30px;
    
    &::before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #000;
        bottom: -5px;
        left: 0px;
    }
`;

export default PanelTitle;