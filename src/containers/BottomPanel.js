import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import styled from 'styled-components';
import {push} from 'react-router-redux';
import SvgIcon from '../components/SvgIcon';

import {easeInQuad, easeOutQuint} from '../lib/cssEasings.js';

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

const BottomPanelContent = styled.div`
    width: 70%;
    height: 100%;
    margin: 0 auto;
    background-color: #e9e9e9;
`;

const BottomPanelNav = styled.div`
    width: 20%;
    height: 80%;
    position:absolute;
    right: -10%;
    top: 10%; 
`;

const AddLinkIcon = () => (
    <svg width="75" height="75" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
        <path
            id="Plusicon"
            d="M40.664 36.06V18h-4.956v18.06H17.372v4.88h18.336V59h4.956V40.94H59v-4.88H40.664zM38 73C18.67 73 3 57.33 3 38S18.67 3 38 3s35 15.67 35 35-15.67 35-35 35z"
            fill="#525252" fillRule="evenodd"/>
    </svg>
)

class _BottomPanel_ extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isBottomPanelVisible, bottomPanelContent, onNavIconClick} = this.props;
        return (
            <StyledBottomPanel visible={isBottomPanelVisible}>
                <BottomPanelContent>
                    {bottomPanelContent}
                </BottomPanelContent>
                <BottomPanelNav>
                    <SvgIcon
                        layout='BottomPanel'
                        path={'/'}
                        {...this.props}>
                        <AddLinkIcon/>
                    </SvgIcon>
                </BottomPanelNav>
            </StyledBottomPanel>
        )
    }
};

const mapStateToProps = (state) => ({
    isBottomPanelVisible: getIsBottomPanelVisible(state)
});

const mapDispatchToProps = (dispatch) => ({
    onSvgIconClick(path) {
        dispatch(push(path))
    }
});

const BottomPanel = connect(mapStateToProps, mapDispatchToProps)(_BottomPanel_);

export default BottomPanel;