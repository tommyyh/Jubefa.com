import React from 'react';
import css from './menu.module.scss';
import { Link } from 'react-router-dom';
import ArrowSVG from 'assets/icons/arrow.svg';

const Menu = ({
  setMenuOpen,
  menuOpen,
  logoSVG,
  lang,
  langCode,
  setServicesOpen,
}) => {
  const l = lang.nav;

  return (
    <div className={menuOpen ? `${css['menu']} ${css['open']}` : css['menu']}>
      <div
        className={
          menuOpen
            ? `${css['menu-content']} ${css['menu-content-visible']}`
            : css['menu-content']
        }
      >
        <div>
          <div className={css['top']}>
            <div className={css['title']}>
              <img src={logoSVG} alt='logo' />

              <h2>{l.title}</h2>
            </div>

            <h5 onClick={() => setMenuOpen(false)}>close</h5>
          </div>

          <ul className={css['links']}>
            <li>
              <Link to={`/${langCode}`}>{l.home}</Link>
            </li>
            <li onClick={() => setServicesOpen(true)}>{l.services}</li>
            <li>
              <Link to={`/${langCode}`}>{l.projectDev}</Link>
            </li>
            <li>
              <Link to={`/${langCode}`}>{l.contact}</Link>
            </li>
          </ul>
        </div>

        <div className={css['bottom']}>
          <ul>
            <li>
              <a href={`tel:${lang.general.telTrimmed}`}>{lang.general.tel}</a>
            </li>
            <li>
              <Link to={`/${langCode}`}>
                <span>{l.cta}</span>
                <img src={ArrowSVG} alt='arrow' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
