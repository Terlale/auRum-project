import React from "react";
import Douglas from "./../img/douglas-bagg-EmHeYdjEMKw-unsplash 1.svg";
import { Container, HalfWidthContainer, ImageContainer, Image } from "./styled";


const MainCeo = (props) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={Douglas} alt="" />
      </ImageContainer>
      <HalfWidthContainer>
        <h1 style={{ fontSize: "28px" }}>{props.text}</h1>
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
      </HalfWidthContainer>
    </Container>
  );
};

export default MainCeo;
