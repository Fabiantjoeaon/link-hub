import React, {Component} from 'react';

import bindAll from 'lodash/bindAll';

import PanelTitle from '../components/PanelTitle';
import AddLinkForm from '../components/AddLinkForm';
import {withCreateLink} from '../graphql/mutations';

class _AddLinkPanel_ extends Component {
    constructor(props) {
        super(props);

        bindAll(this, '_handleAddLinkSubmit');
    }

    _handleAddLinkSubmit(values) {
        const {description, url, group} = values;
        this.props.mutate({variables: {description, url, group: { name: group }}})
            .then((res) => {
                console.log('created link', res)
            });
    }

    render() {
        console.log(this.props.mutate)
        return (
            <div>
                <PanelTitle>Add Link</PanelTitle>
                <AddLinkForm handleAddLinkSubmit={this._handleAddLinkSubmit} {...this.props} />
            </div>
        )
    }
}

const AddLinkPanel = withCreateLink(_AddLinkPanel_);

export default AddLinkPanel;