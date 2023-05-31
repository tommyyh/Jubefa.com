import React from 'react';
import css from './video.module.scss';
import solarMP4 from 'assets/videos/solar.mp4';

const Video = ({ langCode, lang }) => {
  const l = lang.solar.video;

  return (
    <section className={css['video']}>
      <div className={css['top']}>
        <h3>{l.sub}</h3>
        <h2>{l.title}</h2>
      </div>

      <video controls>
        <source src={solarMP4} type='video/mp4' />
      </video>
    </section>
  );
};

export default Video;
