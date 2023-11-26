import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Background } from "./styled";
import Main from '../../components/Main/Main';
import SlideCart from "../../components/Slide/SlideCart";
import Header from '../../components/Header/Header';

import SlideNumber from "../../components/Slide/SlideNumber";
import MainVideoSection from '../../components/MainVideoSection/MainVideoSection';
import SlideLogo from '../../components/Slide/SlideLogo';
import SlideBlog from '../../components/Slide/SlideBlog';
import Footer from '../../components/Footer/Footer';
import MainCeo from "../../components/MainCeo/MainCeo";
import SlideCertificate from "../../components/Slide/SlideCertificate";
import SlideImage from "../../components/Slide/SlideImage";

const About = () => {
  const headerTextServis = "Missiyamız";
  const headerText = "Biz kimik?";
  const text = "Ceo";
  const about = "Haqqımızda";

  return (
    <div>
      <Navbar text={about} />
      <Background>
        <Main text={headerText}/>
        <div>
          <Header text={headerTextServis}/>
          <SlideCart/>
        </div>
      <MainCeo/>
      <SlideCertificate/>
        
      </Background>
      
      <SlideLogo/>
      <SlideImage/>
      <SlideNumber/>
      <Footer/>

    </div>
  );
};

export default About;
