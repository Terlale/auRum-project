import React from "react";
import styled from "styled-components";
import CartImage from "./../img/jonathan-leonardo-St1iI_US2mk-unsplash 1.jpg";
import CartImage1 from "./../img/hassan-nizam-Y3Hbh7wB8CI-unsplash 1.jpg";
import CartImage2 from "./../img/linval-ebanks-3rF6lSO-Vwc-unsplash 1.jpg";
import Button from "../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
       style={{
        "--swiper-pagination-color": "rgba(206, 189, 136, 1)",
      }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
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
          <StyledTitle>Lorem Ipsum</StyledTitle>
          <StyledParagraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </StyledParagraph>
          <Button />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImage src={CartImage1} alt="" />
          <StyledTitle>Lorem Ipsum</StyledTitle>
          <StyledParagraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </StyledParagraph>
          <Button />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledImage src={CartImage2} alt="" />
          <StyledTitle>Lorem Ipsum</StyledTitle>
          <StyledParagraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </StyledParagraph>
          <Button />
        </StyledSwiperSlide>
      </Swiper>
    </>
  );
}

const StyledSwiperSlide = styled(SwiperSlide)`
  box-sizing: border-box;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  padding: 20px;
  background-color: white;
  gap:15px;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledTitle = styled.h3`
  font-size: 16px;
  margin-top: 10px;
`;

const StyledParagraph = styled.p`
  text-align: center;
  font-size: 12px;
  padding: 0px 10px;
`;
