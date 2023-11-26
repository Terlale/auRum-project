import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Background,Paragraph } from "./styled";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import MainCeo from "../../components/MainCeo/MainCeo";
import CountParagraph from "../../components/CountParagraph/CountParagraph";
import Galary from "../../components/Galary/Galary";

const ShipAgency = () => {
  const headerText = "Ship Agency";
  const servis = "Xidmətlərimiz";

  return (
    <div>
      <Navbar text={servis}/>
      <Background>
        <Main text={headerText} />
        <MainCeo />
        <Paragraph>We provide prompt, efficient and effective agency services to vessels, principals and service providers from an experienced centralized operational hub. We aim to provide best-in-class service as well as be a reputable, reliable and consistent partner of choice for cargo owners, vessel owners and operators. You can always have an AOS ships agent taking care of your interests, wherever in the in the region it is you do business.</Paragraph>     
      </Background>
      <CountParagraph/>
      <Galary/>
      <Footer />
    </div>
  );
};

export default ShipAgency;
