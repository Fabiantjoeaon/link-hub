import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getBackgroundColor, getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import LinksContainer from './LinksContainer';
import Toolbar from './Toolbar';
import BottomPanel from './BottomPanel';

const StyledDashboard = styled.div`
    width: 100vw;
    height: auto;
    max-height: 100vh;
    background-color: #${props => props.backgroundColor};
    transition: all 3s cubic-bezier(0.19, 1, 0.22, 1);
`;

const _Dashboard_ = ({backgroundColor, children}) => {
    return (
        <StyledDashboard backgroundColor={backgroundColor}>
            <LinksContainer />
            <Toolbar />
            <BottomPanel bottomPanelContent={children} />
        </StyledDashboard>
    )
};

const mapStateToProps = (state) => ({
    backgroundColor: getBackgroundColor(state),
    isBottomPanelVisible: getIsBottomPanelVisible(state)
});

const Dashboard = connect(
    mapStateToProps
)(_Dashboard_);
export default Dashboard;



