import React from 'react';
import css from './loading.module.scss';

const Loading = () => {
  return (
    <div className={css['loading']}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loading;
