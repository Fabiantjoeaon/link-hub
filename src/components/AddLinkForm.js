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

const _AddLinkForm_ = ({
    handleSubmit,
    handleAddLinkSubmit,
    handleOnSelectChange,
    pristine,
    submitting,
    groups,
    loading
}) => (
    <StyledAddLinkForm onSubmit={handleSubmit(handleAddLinkSubmit)}>
        <TextInput label='URL' name='url'/>
        <TextInput label='Description' name='description'/>
        {!loading ?
            <Field name='group' onChange={handleOnSelectChange} component='select'>
                <option>Select a group: </option>
                {groups.map((group) => (
                    <option key={group.id} value={group.id}>{group.name}</option>
                ))}
            </Field> :
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