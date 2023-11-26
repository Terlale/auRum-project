import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Button from "../Button/Button";

const SlideHeader = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
    >
      <StyledSwiperSlide>
        <StyledHeading>The standard Loremm Ipsum passage</StyledHeading>
        <StyledParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </StyledParagraph>
        <SlideButton>Click me</SlideButton>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <StyledHeading>The standard Lorem Ipsum passage</StyledHeading>
        <StyledParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </StyledParagraph>
        <SlideButton>Click me</SlideButton>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <StyledHeading>The standard Loremmmm Ipsum passage</StyledHeading>
        <StyledParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </StyledParagraph>
        <SlideButton>Click me</SlideButton>
      </StyledSwiperSlide>
    </Swiper>
  );
};

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  gap: 30px;

  @media screen and (max-width: 756px) {
    padding: 40px;
  }
`;

const StyledHeading = styled.h3`
  color: white;
  font-size: 24px;
`;

const StyledParagraph = styled.p`
  color: white;
  font-size: 16px;
  margin: 0px 50px;
`;

const SlideButton = styled(Button)`
  margin-top: 20px;
`;

export default SlideHeader;
