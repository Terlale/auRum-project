import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Ship from "./../img/Frame.svg"
import countData from "./count.json";

const CountParagraph = () => {
  const [countItems, setCountItems] = useState([]);

  useEffect(() => {
    setCountItems(countData.Items);
  }, []);

  return (
    <Wrapper>
      {countItems.map((item) => (
        <StyleDiv key={item.id} even={item.id % 2 === 0}>
          <StyledHeader>{item.id}</StyledHeader>
          <StyledParagraph>{item.text}</StyledParagraph>
        </StyleDiv>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${Ship});
  background-size: 26%;
  background-position: left;
  background-repeat: no-repeat;
  margin: 60px;

  @media (max-width: 768px) {
    background-size: 50%;
    margin: 20px;
  }
`;

const StyledHeader = styled.h1`
  font-size: 65px;
  color: rgba(206, 189, 136, 0.44);
  font-family: "Cinzel", serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  &:nth-child(even) {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledParagraph = styled.p`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default CountParagraph;
