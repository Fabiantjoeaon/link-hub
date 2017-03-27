import React from 'react';
import TextInput from './inputs/TextInput';
import GroupRadioButton from './inputs/GroupRadioButton';
import {Field, reduxForm} from 'redux-form';
import styled from 'styled-components';
import {withAllGroups} from '../graphql/queries';
import Loading from './Loading';

const StyledAddLinkForm = styled.form`
    width: 100%;
`;

const GroupSelector = styled(Field)`
    display: inline-block;
    width: 100%;
    height: 150px;
`;

const renderGroups = ({groups, ...props}) => (
    <div>
        {groups.map(group =>
            <GroupRadioButton {...props} key={group.id} {...group} />
        )}
    </div>
)

const _AddLinkForm_ = ({
    handleSubmit,
    handleAddLinkSubmit,
    pristine,
    submitting,
    groups,
    loading
}) => (
    <StyledAddLinkForm onSubmit={handleSubmit(handleAddLinkSubmit)}>
        <TextInput label='URL' name='url'/>
        <TextInput label='Description' name='description'/>
        {!loading ?
            <GroupSelector name='group' groups={groups} component={renderGroups}/> :
            <Loading/>
        }
        <div>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
    </StyledAddLinkForm>
);

const AddLinkForm = withAllGroups(reduxForm(
    {form: 'addLinkForm'}
)(_AddLinkForm_));

export default AddLinkForm;