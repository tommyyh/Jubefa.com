import React from 'react';
import css from './review.module.scss';

const Review = ({ l, img }) => {
  return (
    <div className={css['review']}>
      <img src={img} alt='attestant portrait' />

      <div className={css['content']}>
        <h3>{l.attestant}</h3>
        <p>"{l.text}"</p>
        <h4>{l.rating}/5</h4>
      </div>
    </div>
  );
};

export default Review;
