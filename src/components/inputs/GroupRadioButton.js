import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {change} from 'redux-form';


const StyledGroupRadioContainer = styled.div`
   display: inline-block;
   padding: 2.5px;
   width: calc(30% - 5px);
`;

const StyledGroupRadioLabel = styled.label`
  display: inline-block;
  width: 100%;
  height: 40px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  line-height: 40px;
  box-sizing: border-box;
  padding-left: 50px;
  margin-bottom: 5px;
  color: #000;
  
  &::after {
    content: '';
    display: block;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    z-index: -1;
  }
  
  &::before {
    content: "";
    display: inline-block;
    
    width: 40px;
    height: 100%;
    z-index: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #${props => props.color};
    transition: all 0.5s 0.05s cubic-bezier(0.19, 1, 0.22, 1);
   }
`;

const StyledGroupRadioButton = styled.input` 
    display: none;
    
   &:checked {
    + label {
        color: #fff;
        padding-left: 10px;
        
        &::before { 
            width: 100%;
        }
    }
   }
`;

export default class GroupRadioButton extends Component {
    constructor(props) {
        super(props);
    }

    _onLabelClick() {
        const input = ReactDOM.findDOMNode(this.input);
        input.checked = !input.checked;
        this.props.meta.dispatch(change('addLinkForm', 'group', this.props.id))
    }

    render() {
        const {id, color, name} = this.props;
        return (
            <StyledGroupRadioContainer>
                <StyledGroupRadioButton
                    defaultChecked={name == 'Uncategorized'}
                    ref={input => this.input = input}
                    name='group' type='radio' value={id}/>
                <StyledGroupRadioLabel
                    onClick={() => {this._onLabelClick()}}
                    color={color}>{name}</StyledGroupRadioLabel>
            </StyledGroupRadioContainer>
        )
    }
};