import React, {Component} from 'react';
import {Field} from 'redux-form';
import styled from 'styled-components';
import TextInputLabel from './TextInputLabel';

const TextInputWrapper = styled.div`
    margin-bottom: 55px;
    width: 70%;
    height: 40px;
    position: relative;
    box-sizing:border-box;
`;

const StyledTextInput = styled(Field)`
    background-color: rgba(255,255,255,0.9);
    border:none;
    box-sizing:border-box;
    background-image:none;
    width: 100%;
    height: 100%;
    padding: 20px 10px;
    box-shadow: none;
    color: #888888;
    font-size: 1em;
    display: block;
    
    &:focus {
        outline: none;
    }
`;


const TextInput = ({name, label, ...props}) => (
    <TextInputWrapper>
        <TextInputLabel
            htmlFor={name}>{label}</TextInputLabel>
        <StyledTextInput
            name={name}
            component='input'
            placeholder={props.placeholder ? props.placeholder : null}/>
    </TextInputWrapper>
);


export default TextInput;