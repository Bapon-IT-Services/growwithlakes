import PageBackdrop from '../../components/PageBackdrop';
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
