import React, {Component} from 'react';

import bindAll from 'lodash/bindAll';
import {reset} from 'redux-form';
import {connect} from 'react-redux';
import PanelTitle from '../components/PanelTitle';
import AddLinkForm from '../components/AddLinkForm';
import {withCreateLink} from '../graphql/mutations';
import {setNotification, setError} from '../actions'

class _AddLinkPanel_ extends Component {
    constructor(props) {
        super(props);

        bindAll(this, '_handleAddLinkSubmit');
    }

    _handleAddLinkSubmit(values) {
        return new Promise((resolve, reject) => {
            resolve(this.props.mutate({variables: {...values, groupId: values.group}}));
        }).then(() => {
            this.props.setNotification(`Added link ${values.description}`);
            this.props.resetForm('addLinkForm');
        }).catch((e) => {
            this.props.setError(e);
        });
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

const mapStateToProps = (state) => ({state});

const AddLinkPanel = withCreateLink(
    connect(mapStateToProps, {resetForm: reset, setError, setNotification})(_AddLinkPanel_));

export default AddLinkPanel;