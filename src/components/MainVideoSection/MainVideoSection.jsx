import React from "react";
import Video from "./../img/peter-hansen-MeGmdPNe36w-unsplash 1.jpg";
import Line from "./../img/Frame (6).svg";
import {
  Container,
  HalfWidthContainer,
  ImageContainer,
  Image,
  HeaderContainer,
  HeaderText,
  HeaderImage,
} from "./styled";
import Button from "../Button/Button";

const MainVideoSection = () => {
  return (
    <Container>
      <HalfWidthContainer>
        <HeaderContainer>
          <HeaderText>Lorem Ipsum</HeaderText>
          <HeaderImage src={Line} alt="" />
        </HeaderContainer>
        <p style={{ fontSize: "14px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularized in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Button/>
      </HalfWidthContainer>
      <ImageContainer>
        <Image src={Video} alt="" />
      </ImageContainer>
    </Container>
  );
};

export default MainVideoSection;
