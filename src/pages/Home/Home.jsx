import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Background, BackVideoSection, BackBlog } from "./styled";
import Main from '../../components/Main/Main';
import SlideCart from "../../components/Slide/SlideCart";
import Header from '../../components/Header/Header';
import SlideNumber from "../../components/Slide/SlideNumber";
import MainVideoSection from '../../components/MainVideoSection/MainVideoSection';
import SlideLogo from '../../components/Slide/SlideLogo';
import SlideBlog from '../../components/Slide/SlideBlog';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const headerTextServis = "Xidmətlər";
  const headerTextBlog = "Bloglar";
  const headerText = "Niyə biz?";
  return (
    <div>
      <Navbar />
      <Background>
        <Main text={headerText} />
        <div>
          <Header text={headerTextServis} />
          <SlideCart />
        </div>
      </Background>
      <SlideNumber />
      <BackVideoSection>
        <MainVideoSection />
      </BackVideoSection>
      <SlideLogo />
      <BackBlog>
        <Header text={headerTextBlog} />
        <SlideBlog />
      </BackBlog>
      <Footer />
    </div>

  )
}

export default Home