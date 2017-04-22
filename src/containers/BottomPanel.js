import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RouteTransition} from 'react-router-transition';
import {push} from 'react-router-redux';
import styled from 'styled-components';

import {getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import SvgIcon from '../components/SvgIcon';
import {easeInQuad, easeOutQuint} from '../lib/cssEasings.js';

const StyledBottomPanel = styled.section`
    width: 100%;
    background-color: #fff;
    position: fixed;
    bottom:0;
    right:0;
    z-index: 4;
    transition: all ${props => props.visible ? `0.5s 0.5s ${easeOutQuint}` : `0.3s 0.1s ${easeInQuad}`} 
    height: ${props => props.visible ? '570px' : '0px'};
    transform: ${props => props.visible ? 'translate3d(0px, 0px, 0px)' : 'translate3d(0px, 570px, 0px)'};
    will-change: transform;
    display: flex;
    flex-direction: row;
`;

const BottomPanelContent = styled.div`
    width: 95%;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    
`;

const BottomPanelNav = styled.div`
    width: 5%;
    height: 100%;
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
        const {
            isBottomPanelVisible,
            bottomPanelContent,
            onNavIconClick,
            routing
        } = this.props;

        const {pathname} = routing.locationBeforeTransitions;

        return (
            <StyledBottomPanel visible={isBottomPanelVisible}>
                <BottomPanelContent>
                    <RouteTransition
                        pathname={pathname}
                        atEnter={{translateY: 700, opacity: 0}}
                        atLeave={{translateY: 700, opacity: 0}}
                        atActive={{translateY: 0, opacity: 1}}
                        mapStyles={
                            styles => ({
                                width: '100%',
                                transform: `translateY(${styles.translateY}%)`,
                                opacity: `${styles.opacity}`
                            })}
                    >
                        {bottomPanelContent}
                    </RouteTransition>
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
}

const mapStateToProps = (state) => ({
    isBottomPanelVisible: getIsBottomPanelVisible(state),
    routing: state.routing
});

const mapDispatchToProps = (dispatch) => ({
    onSvgIconClick(path) {
        dispatch(push(path))
    }
});

const BottomPanel = connect(mapStateToProps, mapDispatchToProps)(_BottomPanel_);

export default BottomPanel;