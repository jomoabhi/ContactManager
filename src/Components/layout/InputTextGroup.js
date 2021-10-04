import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
const InputTextGroup = ({
  name,
  label,
  placeholder,
  value,
  type,
  onChange,

  errors,
}) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': errors,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

InputTextGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string,
};

InputTextGroup.defaultProps = {
  type: 'text',
};

export default InputTextGroup;
