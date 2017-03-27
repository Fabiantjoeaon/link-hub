import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import bindAll from 'lodash/bindAll';

import * as actions from '../actions';
import {getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import GroupList from '../components/GroupList';
import Loading from '../components/Loading';
import {withAllGroups} from '../graphql/queries';

const StyledLinksComponent = styled.section`
    height: calc(90% - 80px);
    width: calc(100% - 80px);
    padding: 40px 40px;
    margin: 0 auto;
`;

const GroupListOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    position:absolute;
    top:0;
    right:0;
    z-index: 1;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    opacity: ${props => props.visible ? '1' : '0'};
    transition: all 0.4s ${props => props.visible ? '0.4s' : '0.2s'} cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: opacity;
`;

class _LinksContainer_ extends Component {
    constructor(props) {
        super(props);

        bindAll(this, '_onGroupMouseEnterHandler', '_onGroupMouseLeaveHandler');
    }

    _onGroupMouseEnterHandler(color) {
        this.props.changeBackgroundColor(color);
    }

    _onGroupMouseLeaveHandler() {
        this.props.changeBackgroundColor('ffffff');
    }

    render() {
        const {isBottomPanelVisible, loading} = this.props;
        return (
            <StyledLinksComponent>
                <GroupListOverlay visible={isBottomPanelVisible} />
                {!loading ?
                    <GroupList
                        visible={isBottomPanelVisible}
                        onGroupMouseEnterHandler={this._onGroupMouseEnterHandler}
                        onGroupMouseLeaveHandler={this._onGroupMouseLeaveHandler}
                        {...this.props} /> :
                    <Loading/>
                }
            </StyledLinksComponent>
        );
    }
}

const mapStateToProps = (state) => ({
    isBottomPanelVisible: getIsBottomPanelVisible(state)
});

const LinksContainer = withAllGroups(connect(
    mapStateToProps,
    actions
)(_LinksContainer_));

export default LinksContainer;