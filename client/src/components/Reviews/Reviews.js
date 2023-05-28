import React from 'react';
import css from './reviews.module.scss';
import Review from './components/Review';
import Attestant1 from 'assets/images/attestant1.jpg';
import Anonymous from 'assets/images/anonymous.jpg';

const Reviews = ({ lang, langCode }) => {
  const l = lang.reviews;

  return (
    <section className={css['reviews']}>
      <div className={css['list']}>
        <Review l={l.review1} img={Anonymous} />
        <Review l={l.review2} img={Anonymous} />
        <Review l={l.review3} img={Anonymous} />
      </div>
    </section>
  );
};

export default Reviews;
