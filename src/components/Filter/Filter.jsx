import React from "react";
import  PropTypes from 'prop-types';

import {Input, FormField, } from './Filter.styled';

const Filter = ({value, onChange}) => (
    <FormField>
        Find contacts by name
        <br />
        <Input type="text"
        value={value}
        onChange={onChange}
        />
    </FormField>

    
)
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default Filter;