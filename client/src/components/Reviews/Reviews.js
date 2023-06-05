import React from 'react';
import css from './reviews.module.scss';
import Review from './components/Review';
import Attestant1 from 'assets/images/attestant1.jpg';
import Anonymous from 'assets/images/anonymous.jpg';
import Cta from 'components/Cta/Cta';
import variablesJson from 'data/variables/variables.json';

const Reviews = ({ lang, langCode, setContactOpen }) => {
  const l = lang.reviews;
  const color = variablesJson.colors.accentPurple;

  return (
    <div className={css['cont']}>
      <section className={css['reviews']}>
        <div className={css['list']}>
          <Review l={l.review1} img={Anonymous} />
          <Review l={l.review2} img={Anonymous} />
          <Review l={l.review3} img={Anonymous} />
          <Prompt
            l={l.prompt}
            langCode={langCode}
            color={color}
            setContactOpen={setContactOpen}
          />
        </div>
      </section>
    </div>
  );
};

const Prompt = ({ l, langCode, color, setContactOpen }) => {
  return (
    <div className={css['prompt']}>
      <h4>{l.sub}</h4>
      <h3>{l.title}</h3>
      <p>{l.text}</p>

      <Cta
        title={l.cta}
        link={''}
        onClick={() => setContactOpen(true)}
        color={color}
      />
    </div>
  );
};

export default Reviews;
