import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getBackgroundColor, getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import LinksContainer from './LinksContainer';
import Toolbar from './Toolbar';
import BottomPanel from './BottomPanel';

const StyledDashboard = styled.div`
    width: 100vw;
    min-height: 100vh;
    perspective: 200px;
    background-color: #${props => props.backgroundColor};
    transition: all 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

const _Dashboard_ = ({backgroundColor, children, ...props}) => {
    return (
        <StyledDashboard backgroundColor={backgroundColor}>
            <LinksContainer {...props} />
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



