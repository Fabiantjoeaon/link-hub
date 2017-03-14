import React from 'react';
import TextInput from './inputs/TextInput';
import {Field, reduxForm} from 'redux-form';

const _AddLinkForm_ = ({
    handleSubmit,
    handleAddLinkSubmit,
    pristine,
    submitting,
    groups
}) => (
    <form onSubmit={handleSubmit(handleAddLinkSubmit)}>
        <TextInput label='URL' name='url' />
        <TextInput label='Description' name='description' />
        <div>
            <label htmlFor='group'>Group: </label>
            <Field name='group' component='select'>
                {groups.map(group =>
                    <option key={group.id} value={group.name}>{group.name}</option>
                )}
            </Field>
        </div>
        <div>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
    </form>
);

const AddLinkForm = reduxForm(
    { form: 'addLinkForm' }
)(_AddLinkForm_);

export default AddLinkForm;