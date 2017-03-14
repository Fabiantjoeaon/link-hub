import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Field} from 'redux-form';
import styled from 'styled-components';
import bindAll from 'lodash/bindAll';

const StyledTextInputContainer = styled.div`
    display: block;
    overflow: hidden;
    max-width: 500px;
    width: 500px;
    position: relative;
    height: 80px;
    line-height: 80px;
    background-color: #f1f1f1;
    margin-bottom: 15px;
`;

const StyledField = styled(Field)`
    position: absolute;
    font-size: 1em;
    top: 0;
    right: 100%;
    padding: 0px 20px;
    background-color: #fff;
    width: 70%;
    height: 100%;
    border:none;
    background-image:none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-weight: 100;
    transition: transform 0.6s 0.1s cubic-bezier(0.19, 1, 0.22, 1);
    
    &:focus, &.active {
        outline: 0;
        transform: translate3d(350px, 0px, 0px);
        + label {
           transform: translate3d(350px, 0px, 0px);
           
           span {
                opacity: 0;
                
                transition-delay: 0s;
           }
        }
    }
`;

const StyledLabel = styled.label`
    cursor: text;
    padding: 0px 20px;
    font-size: 1.2em;
    background-color: #f1f1f1;
    z-index: 10;
    display: block;
    width: 100%;
    height: 100%;
    text-align: left;
    font-weight: 500;
    
    span {
        opacity: 1;
        font-weight: 100;
        color: #525252;
        font-size: 1em;
        
        transition: opacity 0.6s 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    }
    
    transition: transform 0.6s 0.06s cubic-bezier(0.19, 1, 0.22, 1);
`;


export default class TextInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            val: ''
        }

        bindAll(this, '_onClickHandler', '_onChangeHandler');
    }

    componentDidMount() {
        this.input = ReactDOM.findDOMNode(this.inputRef);
    }

    _onClickHandler() {
        this.input.focus();
    }

    _onChangeHandler(e, val) {
        this.setState({val});
    }

    render() {
        const {name, label, ...props} = this.props;
        return (
            <StyledTextInputContainer >
                <StyledField
                    ref={input => this.inputRef = input}
                    name={name}
                    component='input'
                    onChange={(e, val) => {this._onChangeHandler(e, val)}}
                    placeholder={props.placeholder ? props.placeholder : null} />
                <StyledLabel
                    onClick={() => {this._onClickHandler()}}
                    htmlFor={name}>{label}: <span>{this.state.val}</span></StyledLabel>
            </StyledTextInputContainer >
        );
    }
}

