import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getBackgroundColor} from '../reducers/dashboardReducer';
import LinksContainer from './LinksContainer';
import Toolbar from './Toolbar';
import BottomPanel from './BottomPanel';

const StyledDashboard = styled.div`
    width: 100vw;
    height: auto;
    max-height: 100vh;
    background-color: #${props => props.backgroundColor};
    transition: all 0.3s ease-out;
`;

const _Dashboard_ = ({backgroundColor}) => (
    <StyledDashboard backgroundColor={backgroundColor}>
        <LinksContainer />
        <Toolbar />
        <BottomPanel />
    </StyledDashboard>
);

const mapStateToProps = (state) => ({
    backgroundColor: getBackgroundColor(state)
});

const Dashboard = connect(
    mapStateToProps
)(_Dashboard_);
export default Dashboard;



