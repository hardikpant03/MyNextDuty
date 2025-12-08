import React from 'react';

const InputField = ({ value, placeholder, type = 'text' }) => {
  return (
    <div className="input-field">
      {label && <label htmlFor={placeholder}>{label}</label>}
      <input
        type={type}
        id={placeholder}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
