import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  Background,
  ContactContainer,
  ContactInfo,
  StyledParagraph,
  MailDetail,
  ContactDetail,
} from "./styled";
import Footer from "../../components/Footer/Footer";
import ConnectForm from "../../components/Forms/ConnectForm";

const Connect = () => {
  const career = "Əlaqə";
  return (
    <div>
      <Navbar text={career} />
      <Background>
        <ContactContainer className="animate__animated animate__bounceInLeft">
          <StyledParagraph>Bakı şəh., Üzeyir Hacibeyov, 5/34A</StyledParagraph>
          <ContactInfo >
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
        <ConnectForm/>
      </Background>

      <Footer />
    </div>
  );
};

export default Connect;
