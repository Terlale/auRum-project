import React from "react";
import styled from "styled-components";
import Logo from "./../img/logo (5) 1 (1).svg";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer>
      <NavContainer>
        <StyledList>
          <li>Ana səhifə</li>
          <li>Haqqımızda</li>
          <li>Xidmətlər</li>
          <li>Gəmilər</li>
        </StyledList>
      </NavContainer>
      <NavContainer>
        <StyledList>
          <li>Karyera</li>
          <li>Qalerya</li>
          <li>Əlaqə</li>
        </StyledList>
      </NavContainer>
      <ContactContainer>
        <StyledParagraph>Bakı şəh., Üzeyir Hacibeyov, 5/34A</StyledParagraph>
        <ContactInfo>
          <span>Tel:</span>
          <ContactDetail>
            <p>+994 55 6666600</p>
            <p>+994 55 4466606</p>
          </ContactDetail>
        </ContactInfo>
        <ContactInfo>
          <span>Mail:</span>
          <MailDetail>info@aurum.com</MailDetail>
        </ContactInfo>
      </ContactContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: rgba(40, 54, 75, 1);
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  padding: 60px 0px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:5px;
  }
`;

const LogoContainer = styled.div``;

const NavContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledList = styled.ul`
  list-style: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ContactContainer = styled.div`
@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

const ContactInfo = styled.div`
  span {
    color: rgba(206, 189, 136, 1);
  }
`;

const ContactDetail = styled.div`
  margin-left: 50px;
`;

const StyledParagraph = styled.p`
  margin-bottom: 20px;
`;

const MailDetail = styled.p`
  margin-left: 50px;
`;

export default Footer;
