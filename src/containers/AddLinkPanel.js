import React, {Component} from 'react';

import bindAll from 'lodash/bindAll';
import {reset} from 'redux-form';
import {connect} from 'react-redux';
import styled from 'styled-components';
import PanelTitle from '../components/PanelTitle';
import AddLinkForm from '../components/AddLinkForm';
import AddGroupForm from '../components/AddGroupForm';
import withCreateLink from '../graphql/mutations/createLink';
import withCreateGroup from '../graphql/mutations/createGroup';

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

        bindAll(
            this, 
            '_handleAddLinkSubmit', 
            '_handleOnGroupSelectChange', 
            '_handleOnColorSelectChange',
            '_handleAddGroupSubmit');

        this.state = {group: '', color: ''};
    }

    _handleOnGroupSelectChange(e) {
        this.setState({group: e.target.value});
    }

    _handleOnColorSelectChange(color) {
        this.setState({color});
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

    _handleAddGroupSubmit(values) {
        return new Promise((resolve, reject) => {
            resolve(this.props.createGroup(values.name, values.description, this.state.color))
        }).then(() => {
            this.props.resetForm('addGroupForm');
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
                    <AddGroupForm color={this.state.color} handleOnColorSelectChange={this._handleOnColorSelectChange}
                                  handleAddGroupSubmit={this._handleAddGroupSubmit} />
                </AddGroupContainer>
            </CreateContainer>
        )
    }
}

const mapStateToProps = (state) => ({state});

const AddLinkPanel = withCreateGroup(withCreateLink(
    connect(mapStateToProps, {resetForm: reset})(_AddLinkPanel_)));

export default AddLinkPanel;