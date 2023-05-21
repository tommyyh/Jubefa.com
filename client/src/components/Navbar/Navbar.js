import React, { useState } from 'react';
import css from './nav.module.scss';
import logoSVG from 'assets/icons/logo.svg';
import phoneSVG from 'assets/icons/phone.svg';
import Menu from './components/Menu';

const Navbar = ({ lang, langCode }) => {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const l = lang.nav;
  const pathname = window.location.pathname.split('/');
  const url = pathname.splice(2, pathname.length).join('/'); // Full url for redirecting back with diff language

  return (
    <>
      <nav className={css['nav']}>
        <div className={css['title']}>
          <img src={logoSVG} alt='logo' />

          <h2>{l.title}</h2>
        </div>

        <div className={css['right']}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            onClick={() => {
              window.location.href = l.footer.info.tel;
            }}
            className={css['call']}
          >
            <path
              d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'
              fill='#0A2540'
            />
          </svg>

          <div className={css['lang']}>
            <h5 onClick={() => setLangOpen(true)}>{langCode.toUpperCase()}</h5>

            <div
              className={
                langOpen
                  ? `${css['dropdown']} ${css['dropdown-open']}`
                  : css['dropdown']
              }
            >
              <div className={css['dropdown-inner']}>
                <a href={`/en/${url}`}>English (EN)</a>
                <a href={`/de/${url}`}>Deutsch (DE)</a>

                <div
                  className={css['lang-close']}
                  onClick={() => setLangOpen(false)}
                ></div>
              </div>
            </div>
          </div>

          <div className={css['menu']} onClick={() => setMenuOpen(true)}>
            <div className={css['menu-line']}></div>
          </div>
        </div>
      </nav>

      <Menu
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        logoSVG={logoSVG}
        lang={lang}
        langCode={langCode}
      />
    </>
  );
};

export default Navbar;
