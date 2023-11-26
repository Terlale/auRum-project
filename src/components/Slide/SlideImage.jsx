import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import CartImage from "./../img/jonas-kakaroto-KIPqvvTOC1s-unsplash 1.jpg";
import CartImage1 from "./../img/jake-nackos-IF9TK5Uy-KI-unsplash 1.jpg";
import CartImage2 from "./../img/ludovic-migneault-EZ4TYgXPNWk-unsplash 1.jpg";
import CartImage3 from "./../img/stephanie-liverani-Zz5LQe-VSMY-unsplash 1.jpg";

const SlideImage = () => {
  return (
    <>
      <Swiper
       style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        padding:"60px",
        backgroundColor:"#CEBD8833",
      }}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <StyledSwiperSlide>
          <StyledImage src={CartImage} alt="" />
          <StyledInform>
            <StyledName>Akbar Mammadov</StyledName>
            <StyledTitle>Development Lead</StyledTitle>
          </StyledInform>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledImage src={CartImage1} alt="" />
          <StyledInform>
            <StyledName>Aysel Alakbarova</StyledName>
            <StyledTitle>HR & Administrative Officer</StyledTitle>
          </StyledInform>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledImage src={CartImage2} alt="" />
          <StyledInform>
            <StyledName>Ali Aliyev</StyledName>
            <StyledTitle>Financial Officer</StyledTitle>
          </StyledInform>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledImage src={CartImage3} alt="" />
          <StyledInform>
            <StyledName>Humay Alizada</StyledName>
            <StyledTitle>Product Owner</StyledTitle>
          </StyledInform>
        </StyledSwiperSlide>

      </Swiper>
    </>
  );
};


const StyledSwiperSlide = styled(SwiperSlide)`
  box-sizing: border-box;
  border: none;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.img`
  display: block;
  border: 15px solid rgba(206, 189, 136, 0.33);
  width: 225px;
  height: 100%;
  object-fit: cover;
`;

const StyledName = styled.p`
  font-size: 16px;
  line-height: 15.5px;
`;

const StyledTitle = styled.p`
  font-size: 16px;
  line-height: 15.5px;
  font-weight: bold;
`;

const StyledInform = styled.div`
  padding: 25px 0px;
`;

export default SlideImage;
