import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import styled from 'styled-components';
import {Router, Route} from 'react-router';
import {push} from 'react-router-redux';
import {history} from '../index';
import AddLinkPanel from './AddLinkPanel';

const easeInQuad = 'cubic-bezier(0.55, 0.085, 0.68, 0.53)';
const easeOutQuint = 'cubic-bezier(0.23, 1, 0.32, 1)';

const StyledBottomPanel = styled.section`
    width: 100%;
    background-color: #f2f2f2;
    position: fixed;
    bottom:0;
    right:0;
    z-index: 2;
    transition: all ${props => props.visible ? `0.5s 0.4s ${easeOutQuint}` : `0.3s 0s ${easeInQuad}`} 
    height: ${props => props.visible ? '500px' : '0px'};
    transform: ${props => props.visible ? 'translateY(0px)' : 'translateY(500px)'};
    will-change: transform;
`;

class _BottomPanel_ extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isBottomPanelVisible} = this.props;
        return (
            <StyledBottomPanel
                visible={isBottomPanelVisible}>
                <Router history={history}>
                    <Route path='/add_link' component={AddLinkPanel}/>
                </Router>
                <p onClick={() => {this.props.onXClick('/')}}>X</p>
            </StyledBottomPanel>
        )
    }
};

const mapStateToProps = (state) => ({
    isBottomPanelVisible: getIsBottomPanelVisible(state)
});

const mapDispatchToProps = (dispatch) => ({
    onXClick(path) {
        dispatch(push(path))
    }
});

const BottomPanel = connect(mapStateToProps, mapDispatchToProps)(_BottomPanel_);

export default BottomPanel;