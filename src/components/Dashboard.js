import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getBackgroundColor} from '../reducers/backgroundColorReducer';
import LinksContainer from '../containers/LinksContainer';

const StyledDashboard = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.backgroundColor};
    transition: all 0.3s ease-out;
`;

const _Dashboard_ = ({backgroundColor}) => (
    <StyledDashboard backgroundColor={backgroundColor}>
        <LinksContainer />
    </StyledDashboard>
);

const mapStateToProps = (state) => ({
    backgroundColor: getBackgroundColor(state)
});

const Dashboard = connect(
    mapStateToProps
)(_Dashboard_);
export default Dashboard;



