import React from 'react';
import styled from 'styled-components';

import colorLuminance from '../lib/colorLuminance';

const colors = [
    {
        name: 'Spanish Pink',
        color: 'EBBAB9',
    },
    {
        name: 'Teal Deer',
        color: '91F5AD'
    },
    {
        name: 'Mellow Apricot',
        color: 'FBBA72'
    },
    {
        name: 'Electric Lavender',
        color: 'EDC9FF'
    },
    {
        name: 'Light Khaki',
        color: 'D5E68D'
    },
    {
        name: 'Isabelline',
        color: 'EFEFF0'
    },
    {
        name: 'Pale Chestnut',
        color: 'E4B1AB'
    },
    {
        name: 'Wild Blue Yonder',
        color: '9CADCE'
    }
];

const ColorPickerWrapper = styled.div`
    width: 460px;
    height: 150px;
    background-color: #fff;
    display: flex;
    flex-flow: row wrap;
`;
const Color = styled.div`
    background-color: #${props => props.color};
    width: 25%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-out;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.darkerColor};
        
        span {
            color: #${props => props.color}
        }
    }
`;

const ColorText = styled.span`
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

//onClick change redux form value
const ColorPicker = ({props}) => (
    <ColorPickerWrapper>
        {colors.map(({name, color}) =>
            <Color key={color} color={color} darkerColor={colorLuminance(color, -0.1)}>
                <ColorText color={color} darkerColor={colorLuminance(color, -0.2)}>{name}</ColorText>
            </Color>
        )}
    </ColorPickerWrapper>
);

export default ColorPicker;