import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import bindAll from 'lodash/bindAll';

import * as actions from '../actions';
import {getGroups} from '../reducers/groupsReducer';
import {getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import GroupList from '../components/GroupList';

const StyledLinksComponent = styled.section`
    height: 100%;
    width: 100%;
    margin: 0 auto;
`;

const GroupListOverlay = styled.div`
    width: 100%;
    height: 100%;
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

    componentDidMount() {
        this.props.addGroup('group1', 'B1B7D1');
        this.props.addGroup('group2', 'FFC15E');
        this.props.addGroup('group3', '187795');
        this.props.addGroup('group4', 'F4ACB7');
        this.props.addGroup('group5', 'EC4E20');

        this.props.addLink('link11', 'desc');
        this.props.addLink('link2', 'desc');
        this.props.addLink('link3', 'desc', 'group2');
        this.props.addLink('link4', 'desc', 'group3');
        this.props.addLink('link55', 'desc');
    }

    _onGroupMouseEnterHandler(color) {
        this.props.changeBackgroundColor(color);
    }

    _onGroupMouseLeaveHandler() {
        this.props.changeBackgroundColor('f2f2f2');
    }

    render() {
        const {isBottomPanelVisible} = this.props;
        return (
            <StyledLinksComponent>
                <GroupListOverlay visible={isBottomPanelVisible} />
                <GroupList
                    onGroupMouseEnterHandler={this._onGroupMouseEnterHandler}
                    onGroupMouseLeaveHandler={this._onGroupMouseLeaveHandler}
                    {...this.props} />
            </StyledLinksComponent>
        );
    }
}

const mapStateToProps = (state) => ({
    groups: getGroups(state),
    isBottomPanelVisible: getIsBottomPanelVisible(state)
});

const LinksContainer = connect(
    mapStateToProps,
    actions
)(_LinksContainer_);

export default LinksContainer;