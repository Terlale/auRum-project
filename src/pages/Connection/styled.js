import styled from "styled-components";
import BackgroundImage from "./../img/Background.svg";

export const Background = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding: 60px;
  position: relative;
  background-color: rgba(206, 189, 136, 0.23);
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (max-width: 556px) {
    display:flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ContactContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactInfo = styled.div`
  span {
    color: rgba(206, 189, 136, 1);
  }
`;

export const ContactDetail = styled.div`
  margin-left: 50px;
`;

export const MailDetail = styled.p`
  margin-left: 50px;
`;
