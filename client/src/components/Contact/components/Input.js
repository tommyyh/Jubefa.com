import React from 'react';
import css from './input.module.scss';

const Input = ({ type, name, placeholder, maxLength, ...props }) => {
  return (
    <div className={css['input']}>
      {type !== 'textarea' ? (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          {...props}
        />
      ) : (
        <textarea
          name={name}
          placeholder={placeholder}
          cols='30'
          rows='10'
          maxLength={maxLength}
          {...props}
        ></textarea>
      )}
    </div>
  );
};

export default Input;
