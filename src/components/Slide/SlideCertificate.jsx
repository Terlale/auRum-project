import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import CartImage from "../img/classy-ornamental-certificate-template-beige-black_53876-116396 1.jpg";
import CartImage1 from "../img/1600w-0q9YD261Ep8 1.jpg";
import CartImage2 from "../img/8faec3a389cd628f24293abef4d3a26b 1.jpg";
import CartImage3 from "../img/student-certificate 1.jpg";
import Border from "../img/ramka 1.svg";
import Header from "../Header/Header";

const SlideCertificate = () => {
  const HeaderText = "Sertifikatlar";
  return (
    <>
      <Header text={HeaderText} />
      <Swiper
       style={{
        "--swiper-navigation-color": "#ff",
        "--swiper-pagination-color": "#fff",
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
          210: {
            slidesPerView: 1,
            spaceBetween: 10,
          }
        }}
      >
        <StyledSwiperSlide>
          <StyledImage src={CartImage} alt="" />
          <StyledImageBorder src={Border} alt="" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledImage src={CartImage1} alt="" />
          <StyledImageBorder src={Border} alt="" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledImage src={CartImage2} alt="" />
          <StyledImageBorder src={Border} alt="" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledImage src={CartImage3} alt="" />
          <StyledImageBorder src={Border} alt="" />
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
  margin: 10px 0px;
  padding: 20px;
`;

const StyledImage = styled.img`
  display: block;
  position: relative;
  width: 213px;
`;

const StyledImageBorder = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 247px;
`;

export default SlideCertificate;
