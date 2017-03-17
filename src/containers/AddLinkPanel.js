import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {addLink} from '../actions';

import bindAll from 'lodash/bindAll';

import {getGroupsSortedAlphabetical} from '../reducers/groupsReducer';
import PanelTitle from '../components/PanelTitle';
import AddLinkForm from '../components/AddLinkForm';

class _AddLinkPanel_ extends Component {
    constructor(props) {
        super(props);

        bindAll(this, '_handleAddLinkSubmit');
    }

    _handleAddLinkSubmit(values) {
        console.log(values);
        const {url, description, group} = values;
        this.props.addLink(url, description, group);
    }

    render() {
        return (
            <div>
                <PanelTitle>Add Link</PanelTitle>
                <AddLinkForm handleAddLinkSubmit={this._handleAddLinkSubmit} {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    groups: getGroupsSortedAlphabetical(state)
});

const AddLinkPanel = connect(
    mapStateToProps,
    {addLink}
)(_AddLinkPanel_);
export default AddLinkPanel;