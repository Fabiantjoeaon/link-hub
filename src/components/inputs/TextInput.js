import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Field} from 'redux-form';
import styled from 'styled-components';
import bindAll from 'lodash/bindAll';

const TextInput = ({name, label, ...props}) => (
    <div>
        <Field
            name={name}
            component='input'
            placeholder={props.placeholder ? props.placeholder : null}/>
        <label
            htmlFor={name}>{label}</label>
    </div>
);


export default TextInput;