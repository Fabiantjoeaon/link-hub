import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';
import GroupList from '../components/GroupList';
import _ from 'lodash';

const StyledLinksComponent = styled.section`
    height: 100%;
    width: 100%;
    margin: 0 auto;
`;

class _LinksContainer_ extends Component {
    constructor(props) {
        super(props);

        _.bindAll(this, '_onGroupMouseEnterHandler', '_onGroupMouseLeaveHandler');
    }

    componentDidMount() {
        this.props.addGroup('name1', 'EDC7C2');
        this.props.addGroup('name2', 'F3EFE0');
        this.props.addGroup('name3', 'DDFFD9');
        this.props.addGroup('name4', 'B7B7B7');
        this.props.addGroup('name5', 'C0D8E0');
    }

    _onGroupMouseEnterHandler(color) {
        this.props.changeBackgroundColor(color);
    }

    _onGroupMouseLeaveHandler() {
        this.props.changeBackgroundColor('f2f2f2');
    }

    render() {
        return (
            <StyledLinksComponent>
                <GroupList
                    onGroupMouseEnterHandler={this._onGroupMouseEnterHandler}
                    onGroupMouseLeaveHandler={this._onGroupMouseLeaveHandler}
                    {...this.props} />
            </StyledLinksComponent>
        );
    }
}

const mapStateToProps = (state) => ({
    groups: state.groups,
    links: state.links
});

const LinksContainer = connect(
    mapStateToProps,
    actions
)(_LinksContainer_);

export default LinksContainer;