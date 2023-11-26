import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import CartImage from "../img/viktor-ritsvall-bnVJraYBXkQ-unsplash 1.jpg";
import CartImage1 from "../img/nate-cheney-iPrYNHEBieE-unsplash 1.jpg";
import CartImage2 from "../img/joseph-barrientos-eUMEWE-7Ewg-unsplash 1.jpg";
import CartImage3 from "../img/johny-vino-B7zI7Gd3rgQ-unsplash 1.jpg";


const SlideGalary = () => {
  return (
    <>
      <Swiper
       style={{
        "--swiper-navigation-color": "#ff",
        "--swiper-pagination-color": "#fff",
        padding:"0px 60px 20px 60px",
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
          210: {
            slidesPerView: 1,
            spaceBetween: 10,
          }
        }}
      >
        <StyledSwiperSlide>
          <StyledImage src={CartImage} alt="" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledImage src={CartImage1} alt="" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledImage src={CartImage2} alt="" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledImage src={CartImage3} alt="" />
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

`;

const StyledImage = styled.img`
 
`;
export default SlideGalary;
