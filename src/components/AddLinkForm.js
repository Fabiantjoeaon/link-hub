import React from 'react';
import TextInput from './inputs/TextInput';
import GroupRadioButton from './inputs/GroupRadioButton';
import {Field, reduxForm} from 'redux-form';
import styled from 'styled-components';

const StyledAddLinkForm = styled.form`
    width: 500px;
`;

const GroupSelector = styled.div`
    width: 100%;
    height: 170px;
`;

const _AddLinkForm_ = ({
    handleSubmit,
    handleAddLinkSubmit,
    pristine,
    submitting,
    groups
}) => (
    <StyledAddLinkForm onSubmit={handleSubmit(handleAddLinkSubmit)}>
        <TextInput label='URL' name='url'/>
        <TextInput label='Description' name='description'/>
        <GroupSelector>
            {groups.map(group =>
                <GroupRadioButton value={group.name} key={group.id} {...group} />
            )}
        </GroupSelector>
        <div>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
    </StyledAddLinkForm>
);

const AddLinkForm = reduxForm(
    {form: 'addLinkForm'}
)(_AddLinkForm_);

export default AddLinkForm;