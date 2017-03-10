import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import styled from 'styled-components';
import {toggleBottomPanelVisibility} from '../actions';
import {getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import ToolbarIcon from '../components/ToolbarIcon';

const StyledToolbar = styled.section`
    position: fixed;
    width: 50%;
    z-index: 3;
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
        const {onToolbarIconClick, isBottomPanelVisible} = this.props;
        return (
            <StyledToolbar>
                <ToolbarIcon
                    onToolbarIconClick={onToolbarIconClick}
                    path={'/add_link'}
                    isBottomPanelVisible={isBottomPanelVisible} />
            </StyledToolbar>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    isBottomPanelVisible: getIsBottomPanelVisible(state),
});

const mapDispatchToProps = (dispatch) => ({
   onToolbarIconClick(path) {
       dispatch(push(path))
   }
});

const Toolbar = connect(mapStateToProps, mapDispatchToProps)(_Toolbar_);
export default Toolbar;

