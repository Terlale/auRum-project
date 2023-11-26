import React from 'react';
import Footer from "../../components/Footer/Footer";
import Navbar from '../../components/Navbar/Navbar';
import PhotoButton from '../../components/Button/PhotoButton';
import VideoButton from '../../components/Button/VideoButton';
import Galary from '../../components/Galary/Galary';

import { StyledGalleryContainer } from "./styled";

const Galaries = () => {
  const galary = "Qaleriya";
  return (
    <div>
      <Navbar text={galary}/>
      <StyledGalleryContainer>
        <PhotoButton />
        <VideoButton />
      </StyledGalleryContainer>
      <Galary/>
      <Footer />
    </div>
  );
};

export default Galaries;
