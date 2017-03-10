import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import styled from 'styled-components';
import {Router, Route} from 'react-router';
import {history} from '../index';
import AddLinkPanel from './AddLinkPanel';

const StyledBottomPanel = styled.section`
    width: 100%;
    height: 500px;
    background-color: #f2f2f2;
    position: absolute;
    bottom:0;
    right:0;
    z-index: 2;
    transition: all 0.5s 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: ${props => props.visible ? 'visible' : 'hidden'};
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
            </StyledBottomPanel>
        )
    }
};

const mapStateToProps = (state) => ({
    isBottomPanelVisible: getIsBottomPanelVisible(state)
});

const BottomPanel = connect(mapStateToProps)(_BottomPanel_);

export default BottomPanel;