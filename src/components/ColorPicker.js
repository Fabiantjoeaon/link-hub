import React, {Component} from 'react';
import styled from 'styled-components';

import colors from '../lib/colors';
import colorLuminance from '../lib/colorLuminance';

const ColorPickerWrapper = styled.div `
    width: 460px;
    height: 150px;
    background-color: #fff;
    display: flex;
    flex-flow: row wrap;
`;

const Color = styled.div `
    background-color: #${props => props.color};
    width: 25%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-out;
    cursor: pointer;

    &:hover, &.active {
        background-color: ${props => props.darkerColor};
        
        span {
            color: #${props => props.color}
        }
    }
`;

const ColorText = styled.span `
        display: block;
        color: ${props => props.darkerColor};
        max-width: 60%;
        position: relative;
        font-size: 0.9em;
        margin: 0 auto;
        word-wrap: break-word;
        text-align: center;
        transition: all 0.3s ease-out;
`;

const ColorPicker = ({handleChange, currentColor}) => (
            <ColorPickerWrapper>
                {colors.map(({name, color}) => 
                    <Color
                        key={color}
                        className={currentColor == color ? 'active' : null}
                        color={color}
                        onClick={() => {handleChange(color)}}
                        darkerColor={colorLuminance(color, -0.1)}>
                        <ColorText color={color} darkerColor={colorLuminance(color, -0.2)}>{name}</ColorText>
                    </Color>
                )}
            </ColorPickerWrapper>
);

export default ColorPicker;