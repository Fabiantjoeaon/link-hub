import React from 'react';
import styled from 'styled-components';
import {Field, reduxForm} from 'redux-form';

import TextInputLabel from './inputs/TextInputLabel';
import TextInput from './inputs/TextInput';
import ColorPicker from './ColorPicker';

const StyledAddGroupForm = styled.form`
    width: 100%;
`;

const _AddGroupForm_ = ({
    handleOnColorSelectChange,
    handleSubmit,
    handleAddGroupSubmit,
    pristine,
    submitting,
    loading,
    color
}) => (
    <StyledAddGroupForm onSubmit={handleSubmit(handleAddGroupSubmit)}>
        <TextInput label='Name' name='name'/>
        <TextInput label='Description' name='description'/>
        <div>
            <TextInputLabel>Color</TextInputLabel>
            <ColorPicker currentColor={color} handleChange={handleOnColorSelectChange} />
        </div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
    </StyledAddGroupForm>
);

const AddGroupForm = reduxForm({
    form: 'addGroupForm'
})(_AddGroupForm_);

export default AddGroupForm;