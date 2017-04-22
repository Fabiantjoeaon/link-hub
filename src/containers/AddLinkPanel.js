import React, {Component} from 'react';

import bindAll from 'lodash/bindAll';
import {reset} from 'redux-form';
import {connect} from 'react-redux';
import styled from 'styled-components';
import PanelTitle from '../components/PanelTitle';
import AddLinkForm from '../components/AddLinkForm';
import AddGroupForm from '../components/AddGroupForm';
import {withCreateLink} from '../graphql/mutations';

const CreateContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row no-wrap;
`;

const AddLinkContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: #959595;
    padding-left: 30px;
    
    transition: all 0.6s cubic-bezier(0.19, 1, 0.4, 1);
    &:hover {
        background-color: #8fbaeb;
    }
`;
const AddGroupContainer = styled.div`
    width: 50%;
    background-color: #959595;
    height: 100%;
    padding-left: 30px;
    
    transition: all 0.6s cubic-bezier(0.19, 1, 0.4, 1);
    &:hover {
        background-color: #8fbaeb;
    }
`;

class _AddLinkPanel_ extends Component {
    constructor(props) {
        super(props);

        bindAll(this, '_handleAddLinkSubmit', '_handleOnGroupSelectChange');

        this.state = {group: ''}
    }

    _handleOnGroupSelectChange(e) {
        this.setState({group: e.target.value});
    }

    _handleAddLinkSubmit(values) {
        return new Promise((resolve, reject) => {
            resolve(this.props.createLink(values.url, values.description, this.state.group))
        }).then(() => {
            this.props.resetForm('addLinkForm');
        }).catch((e) => {
            console.log(e)
        });
    }

    render() {
        return (
            <CreateContainer>
                <AddLinkContainer>
                    <PanelTitle
                        title="Add Link"
                        subtitle="Add your bookmark to a new group"
                    />
                    <AddLinkForm handleOnSelectChange={this._handleOnGroupSelectChange}
                                 handleAddLinkSubmit={this._handleAddLinkSubmit} {...this.props} />
                </AddLinkContainer>
                <AddGroupContainer>
                    <PanelTitle
                        title="Add Group"
                        subtitle="Add a new group to save bookmarks in"
                    />
                    <AddGroupForm />
                </AddGroupContainer>
            </CreateContainer>
        )
    }
}

const mapStateToProps = (state) => ({state});

const AddLinkPanel = withCreateLink(
    connect(mapStateToProps, {resetForm: reset})(_AddLinkPanel_));

export default AddLinkPanel;