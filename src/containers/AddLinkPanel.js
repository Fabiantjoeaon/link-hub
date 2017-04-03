import React, {Component} from 'react';

import bindAll from 'lodash/bindAll';
import {reset} from 'redux-form';
import {connect} from 'react-redux';
import PanelTitle from '../components/PanelTitle';
import AddLinkForm from '../components/AddLinkForm';
import {withCreateLink} from '../graphql/mutations';

class _AddLinkPanel_ extends Component {
    constructor(props) {
        super(props);

        bindAll(this, '_handleAddLinkSubmit', '_handleOnSelectChange');

        this.state = { group: '' }
    }

    _handleOnSelectChange(e) {
        this.setState({group: e.target.value});
    }

    _handleAddLinkSubmit(values) {
        return new Promise((resolve, reject) => {
            resolve(this.props.mutate({variables: {...values, groupId: this.state.group}}));
        }).then(() => {
            this.props.resetForm('addLinkForm');
        }).catch((e) => {
            console.log(e)
        });
    }

    render() {
        return (
            <div>
                <PanelTitle>Add Link</PanelTitle>
                <AddLinkForm handleOnSelectChange={this._handleOnSelectChange}
                             handleAddLinkSubmit={this._handleAddLinkSubmit} {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({state});

const AddLinkPanel = withCreateLink(
    connect(mapStateToProps, {resetForm: reset})(_AddLinkPanel_));

export default AddLinkPanel;