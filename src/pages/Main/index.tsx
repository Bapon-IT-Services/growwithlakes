import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageBackdrop from '../../components/PageBackdrop';
import { useScrollToHash } from '../../hooks/useScrollToHash';
import SiteHeader from '../SiteHeader';
import Hero from '../Hero';
import AboutUs from '../AboutUs';
import Quote from '../Quote';
import ImpactCommunity from '../ImpactCommunity';
import WhatIDo from '../WhatIDo';
import WorkWithMe from '../WorkWithMe';
import Opportunities from '../Opportunities';
import Partners from '../Partners';
import Events from '../Events';
import Contact from '../Contact';
import Footer from '../Footer';
import * as S from './index.style';

export default function Main() {
  const { pathname, hash, key } = useLocation();
  useScrollToHash();

  useLayoutEffect(() => {
    if (pathname !== '/') return;

    const previous = history.scrollRestoration;
    history.scrollRestoration = 'manual';

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    return () => {
      history.scrollRestoration = previous;
    };
  }, [pathname, hash, key]);

  return (
    <S.Page>
      <PageBackdrop />
      <SiteHeader />
      <S.Main>
        <Hero />
        <AboutUs />
        <Quote />
        <WhatIDo />
        <ImpactCommunity />
        <Opportunities />
        <Partners />
        <WorkWithMe />
        <Events />
        <Contact />
        <Footer />
      </S.Main>
    </S.Page>
  );
}
