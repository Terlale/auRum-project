import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { Background,Paragraph } from "./styled";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import MainCeo from "../../components/MainCeo/MainCeo";
import CountParagraph from "../../components/CountParagraph/CountParagraph";
import Header from '../../components/Header/Header';
import SlideImage from '../../components/Slide/SlideImage';
import Galary from '../../components/Galary/Galary';

const Ship = () => {
  const headerText = "Gəmilər";
  const ship = "Gəmilər";
  return (
    <div>
      <Navbar text={ship}/>
      <Background>
        <Header text={headerText}/>
       
      </Background>
      <Galary/>
     
      <Footer />
    </div>
  )
}

export default Ship