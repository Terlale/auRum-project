import React from "react";
import styled from "styled-components";
import Logo from "./../img/pngwing 1.svg";
import Logo1 from "./../img/pngwing 2.svg";
import Logo2 from "./../img/pngwing 3.svg";
import Logo3 from "./../img/pngwing 4.svg";
import Logo4 from "./../img/pngwing 5.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SlideLogo = () => {
  return (
    <StyledSwiper
    style={{
      "--swiper-pagination-color": "#a4b4c7",
      alignItems:"center",
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
          slidesPerView: 5,
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
        <StyledImage src={Logo} alt="" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <StyledImage src={Logo1} alt="" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <StyledImage src={Logo2} alt="" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <StyledImage src={Logo3} alt="" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <StyledImage src={Logo4} alt="" />
      </StyledSwiperSlide>
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  background-color: rgba(40, 54, 75, 1);
  padding: 60px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
 
`;

const StyledImage = styled.img`

`;

export default SlideLogo;
