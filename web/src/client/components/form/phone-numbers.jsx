import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import Input from './input';
import Select from './select';

const propTypes = {
  fields: PropTypes.object,
};

const enumPhones = [
  'Direct',
  'Main',
  'Mobile',
  'Work',
  'Home',
  'Other',
];

const renderPhoneNumbers = ({ fields }) => (
  <ul>
    {fields.map((pN, index) =>
      <li
        key={`${pN}.phoneNumber`}
      >
        <div>
          <Field
            name={`${pN}.phoneType`}
            type="text"
            component={Select}
            label="Type"
            options={enumPhones}
            shouldFocus
          />
          <Field
            name={`${pN}.phoneNumber`}
            type="text"
            component={Input}
            label="Phone Number"
          />
          <div>
            <button
              type="button"
              onClick={() => fields.remove(index)}
            >
            delete
            </button>
          </div>

        </div>
      </li>,
    )}
    <li>
      <button
        type="button"
        onClick={() => fields.push()}
        autoFocus
      >
        Add Phone Number
      </button>
    </li>
  </ul>
);

renderPhoneNumbers.propTypes = propTypes;

export default renderPhoneNumbers;
