import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageBackdrop from '../../components/PageBackdrop';
import { useScrollToHash } from '../../hooks/useScrollToHash';
import SiteHeader from '../SiteHeader';
import Hero from '../Hero';
import AboutUs from '../AboutUs';
import WhatIDo from '../WhatIDo';
import Opportunities from '../Opportunities';
import Partners from '../Partners';
import Contact from '../Contact';
import Footer from '../Footer';
import * as S from './index.style';

export default function Main() {
  const { hash } = useLocation();
  useScrollToHash();

  useLayoutEffect(() => {
    const previous = history.scrollRestoration;
    history.scrollRestoration = 'manual';

    if (!hash) {
      window.scrollTo(0, 0);
    }

    return () => {
      history.scrollRestoration = previous;
    };
  }, [hash]);

  return (
    <S.Page>
      <PageBackdrop />
      <SiteHeader />
      <S.Main>
        <Hero />
        <AboutUs />
        <WhatIDo />
        <Opportunities />
        <Partners />
        <Contact />
        <Footer />
      </S.Main>
    </S.Page>
  );
}
