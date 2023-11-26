import Line from "./../img/Frame (6).svg";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
display: flex;
width: 50%;
flex-direction: column;
align-items: flex-start;
padding: 20px 0px;
`;

const HeaderText = styled.h3`
 font-size:20px;
`;
const HeaderTextStyled = styled.h4`
  color: rgba(206, 189, 136, 1);
  font-family: 'Square Peg', cursive;
  font-size: 24px;
  
`;

const HeaderImage = styled.img`

width:55px;
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderTextStyled>{props.text}</HeaderTextStyled>
      <HeaderText>{props.text}</HeaderText>
      <HeaderImage src={Line} alt="" />
    </HeaderContainer>
  );
};

export default Header;
