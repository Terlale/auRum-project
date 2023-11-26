import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items:center;
  padding:60px
  color:white;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HalfWidthContainer = styled.div`
width: 50%;
color: white;
display: flex;
flex-direction: column;
gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;

export const ImageContainer = styled.div`
`;

export const Header = styled.div`
  color:white;
`;

export const Image = styled.img`
  width: 520px;
 
  @media (max-width: 768px) {
    width: 100%;
    border: none;
  }
`;

export const HeaderContainer = styled.div`
display: flex;
    width: 34%;
    flex-direction: column;
    align-items: center;
    padding:10px 0px;
    color:white;
`;

export const HeaderText = styled.h3``;

export const HeaderImage = styled.img`


width:90px;
`;


