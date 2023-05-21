import React from 'react';
import css from './cta.module.scss';
import { Link } from 'react-router-dom';
import arrowSVG from 'assets/icons/arrow.svg';

const Cta = ({ title, link, color }) => {
  return (
    <Link
      to={link}
      className={css['cta']}
      style={color ? { background: color } : {}}
    >
      <span>{title}</span>
      <img src={arrowSVG} alt='chevron' />
    </Link>
  );
};

export default Cta;
