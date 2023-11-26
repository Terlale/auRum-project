import React from "react";
import styled from "styled-components";
import { RiCalendarEventFill, RiEyeLine } from "react-icons/ri";
import { AiOutlineComment } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import CartImage from "./../img/linval-ebanks-3rF6lSO-Vwc-unsplash 2.jpg";
import CartImage1 from "./../img/bobby-stevenson-CMf6Soxi-Ao-unsplash 1.jpg";
import CartImage2 from "./../img/katarzyna-ostrowska-OBH6aYRPOuQ-unsplash 1.jpg";

const SlideBlog = () => {
  return (
    <>
      <Swiper
       style={{
        "--swiper-pagination-color": "#d7c69e",
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
          <StyledInform>
            <StyledCalendar>
              <StyledLogo>
                <RiCalendarEventFill />
              </StyledLogo>
              <StyledText>26 December 2022</StyledText>
            </StyledCalendar>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </StyledParagraph>
            <StyledIcons>
              <StyledView>
                <StyledLogo>
                  <RiEyeLine />
                </StyledLogo>
                <StyledText>12 view</StyledText>
              </StyledView>
              <StyledView>
                <StyledLogo>
                  <AiOutlineComment />
                </StyledLogo>
                <StyledText>5 comments</StyledText>
              </StyledView>
            </StyledIcons>
          </StyledInform>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledImage src={CartImage1} alt="" />
          <StyledInform>
            <StyledCalendar>
              <StyledLogo>
                <RiCalendarEventFill />
              </StyledLogo>
              <StyledText>26 December 2022</StyledText>
            </StyledCalendar>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </StyledParagraph>
            <StyledIcons>
              <StyledView>
                <StyledLogo>
                  <RiEyeLine />
                </StyledLogo>
                <StyledText>12 view</StyledText>
              </StyledView>
              <StyledView>
                <StyledLogo>
                  <AiOutlineComment />
                </StyledLogo>
                <StyledText>5 comments</StyledText>
              </StyledView>
            </StyledIcons>
          </StyledInform>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <StyledImage src={CartImage2} alt="" />
          <StyledInform>
            <StyledCalendar>
              <StyledLogo>
                <RiCalendarEventFill />
              </StyledLogo>
              <StyledText>26 December 2022</StyledText>
            </StyledCalendar>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </StyledParagraph>
            <StyledIcons>
              <StyledView>
                <StyledLogo>
                  <RiEyeLine />
                </StyledLogo>
                <StyledText>12 view</StyledText>
              </StyledView>
              <StyledView>
                <StyledLogo>
                  <AiOutlineComment />
                </StyledLogo>
                <StyledText>5 comments</StyledText>
              </StyledView>
            </StyledIcons>
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
  margin: 10px 0px;
  padding: 20px;
  gap: 20px;
`;

const StyledImage = styled.img`
  display: block;
  border: 15px solid rgba(206, 189, 136, 0.33);
  width: 300px;
  height: 100%;
  object-fit: cover;

  
`;

const StyledCalendar = styled.div`
display: flex;
align-items: baseline;
`;

const StyledLogo = styled.div`
  color: #ceb988;
  margin-right: 5px;
  font-size: 21px;
`;

const StyledText = styled.p`
  font-size: 12px;
`;

const StyledInform = styled.div`
  display:flex;
  flex-direction: column;
  gap:7px;
`;

const StyledIcons = styled.div`
  display: flex;
`;

const StyledView = styled.div`
  display: flex;
  align-items: baseline;
  margin-right: 10px;
`;

const StyledParagraph = styled.p`
  font-size: 12px;
`;

export default SlideBlog;
