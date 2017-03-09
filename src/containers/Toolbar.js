import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {toggleBottomPanelVisibility} from '../actions';
import ToolbarIcon from '../components/ToolbarIcon';

const StyledToolbar = styled.section`
    position: absolute;
    width: 50%;
    bottom: 7.5%;
    left: 0;
    right: 0;
    margin: 0 auto;
    
    display: flex;
    flex-flow: row no-wrap;
    justify-content: space-around;
`;

class _Toolbar_ extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledToolbar>
                <ToolbarIcon
                    onToolbarIconClick={this.props.onToolbarIconClick}
                    action='Add link'/>
            </StyledToolbar>
        )
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
   onToolbarIconClick() {
       dispatch(toggleBottomPanelVisibility())
   }
});

const Toolbar = connect(mapStateToProps, mapDispatchToProps)(_Toolbar_);
export default Toolbar;

