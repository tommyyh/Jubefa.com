import React, { useEffect, useState } from 'react';
import 'assets/scss/reset.scss';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading/Loading';
import Navbar from 'components/Navbar/Navbar';
import Landing from './components/Landing';
import Contact from 'components/Contact/Contact';
import homeThumbnailPNG from 'assets/images/homeThumbnail.png';
import Head from 'components/Head/Head';

const NotFound = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const lang = useSelector((state) => state.lang.value.lang.payload);
  const langCode = useSelector((state) => state.lang.value.langCode.payload);

  useEffect(() => {
    if (lang) {
      setLoading(false);
    }
  }, [lang]);

  if (loading) return <Loading />;

  const head = lang.head404;
  const domain = `${lang.general.domain}/${langCode === 'en' ? 'de' : 'en'}/`;

  return (
    <>
      <Head
        thumbnail={homeThumbnailPNG}
        head={head}
        lang={lang}
        domain={domain}
        langCode={langCode}
        short={true}
      />

      <Contact
        lang={lang}
        langCode={langCode}
        setContactOpen={setContactOpen}
        contactOpen={contactOpen}
      />
      <Navbar lang={lang} langCode={langCode} setContactOpen={setContactOpen} />
      <Landing l={lang.notfound} langCode={langCode} />
    </>
  );
};

export default NotFound;
