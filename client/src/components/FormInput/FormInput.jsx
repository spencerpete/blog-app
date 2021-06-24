import React from 'react';

export default function FormInput({ name, label, type, category, placeholder, value, onChange }) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        data-category={category}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

FormInput.defaultProps = {
  type: 'text',
};
