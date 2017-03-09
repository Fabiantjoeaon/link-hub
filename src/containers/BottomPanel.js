import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import styled from 'styled-components';

const StyledBottomPanel = styled.section`
    width: 100%;
    height: 25%;
    background-color: #f2f2f2;
    position: absolute;
    bottom:0;
    right:0;
    
    display: ${props => props.visible ? 'block' : 'none'};
`;

class _BottomPanel_ extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isBottomPanelVisible} = this.props;
        return (
            <StyledBottomPanel visible={isBottomPanelVisible} />
        )
    }
};

const mapStateToProps = (state) => ({
    isBottomPanelVisible: getIsBottomPanelVisible(state)
});

const BottomPanel = connect(mapStateToProps)(_BottomPanel_);

export default BottomPanel;