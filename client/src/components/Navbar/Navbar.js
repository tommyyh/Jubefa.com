import React, { useState } from 'react';
import css from './nav.module.scss';
import logoSVG from 'assets/icons/logo.svg';
import Menu from './components/Menu';

const Navbar = ({ lang, langCode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const l = lang.nav;

  console.log(menuOpen);

  return (
    <>
      <nav className={css['nav']}>
        <div className={css['title']}>
          <img src={logoSVG} alt='logo' />

          <h2>{l.title}</h2>
        </div>

        <div className={css['menu']} onClick={() => setMenuOpen(true)}>
          <div className={css['menu-line']}></div>
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
