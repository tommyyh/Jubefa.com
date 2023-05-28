import React, { useEffect, useState } from 'react';
import 'assets/scss/reset.scss';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading/Loading';
import Navbar from 'components/Navbar/Navbar';
import Landing from './components/Landing';
import Services from 'components/Services/Services';
import Illustration from 'components/Illustration/Illustration';
import WhatWeDo from './components/WhatWeDo';
import Process from 'components/Process/Process';
import WhyUs from './components/WhyUs';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const lang = useSelector((state) => state.lang.value.lang.payload);
  const langCode = useSelector((state) => state.lang.value.langCode.payload);

  useEffect(() => {
    if (lang) {
      setLoading(false);
    }
  }, [lang]);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar lang={lang} langCode={langCode} />
      <Landing lang={lang} langCode={langCode} />
      <Services lang={lang} langCode={langCode} />
      <Illustration lang={lang.profit} langCode={langCode} />
      <WhatWeDo lang={lang} langCode={langCode} />
      <Process lang={lang} langCode={langCode} />
      <WhyUs lang={lang} langCode={langCode} />
    </>
  );
};

export default Home;
