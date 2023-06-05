import React from 'react';
import css from './cta.module.scss';
import { Link } from 'react-router-dom';
import arrowSVG from 'assets/icons/arrow.svg';

const Cta = ({ title, link, color, onClick }) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={css['cta']}
          style={color ? { background: color } : {}}
          onClick={onClick}
        >
          <span>{title}</span>
          <img src={arrowSVG} alt='chevron' />
        </Link>
      ) : (
        <div
          className={css['cta']}
          style={color ? { background: color } : {}}
          onClick={onClick}
        >
          <span>{title}</span>
          <img src={arrowSVG} alt='chevron' />
        </div>
      )}
    </>
  );
};

export default Cta;
