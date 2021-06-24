import React from 'react';

export default function TextArea({
  name,
  label,
  placeholder,
  category,
  value,
  onChange,
  cols,
  rows,
}) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        data-category={category}
        value={value}
        onChange={onChange}
        cols={cols}
        rows={rows}
      ></textarea>
    </div>
  );
}
