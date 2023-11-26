import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function App() {
  const [counters, setCounters] = useState([0, 0, 0]);
  const targets = [90, 142, 59];

  useEffect(() => {
    const intervals = targets.map((target, index) => {
      return setInterval(() => {
        setCounters((prevCounters) => {
          const nextCounters = [...prevCounters];
          nextCounters[index] += 1;
          const reachedTarget = nextCounters[index] >= target;
          if (reachedTarget) {
            clearInterval(intervals[index]);
            nextCounters[index] = target;
          }

          return nextCounters;
        });
      }, 100);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

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
        {counters.map((counter, index) => (
          <StyledSwiperSlide key={index}>
            <NumberText>{counter}</NumberText>
            <StyledHeading>Lorem Ipsum</StyledHeading>
            <StyledParagraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </StyledParagraph>
          </StyledSwiperSlide>
        ))}
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
  gap: 10px;
`;

const NumberText = styled.h1`
  font-weight: 400;
  font-size: 120px;
  color: rgba(206, 189, 136, 1);
  font-family: 'Cinzel', serif;
`;

const StyledHeading = styled.h3`
  font-size: 20px;
`;

const StyledParagraph = styled.p`
  font-size: 12px;
  padding: 0px 39px;
  text-align: center;
`;