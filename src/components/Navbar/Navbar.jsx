import React, { useEffect, useState } from "react";
import Logo from "./../img/logo.svg";
import menuData from "./menu.json";
import { FaBars} from "react-icons/fa";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import { NavbarContainer, FaBarsIcon, NavbarOverlay, NavbarContent, SocialIconsContainer, SocialIconLink, LogoContainer, LanguageListContainer, LanguageListItem, NavbarMenu, MenuList, MenuItem, NavbarHeader } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import SlideHeader from "../Slide/SlideHeader";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css';

const Navbar = (props) => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();
  
  const goAbout = () => {
    navigate("/about");
  };

  const goHome = () => {
    navigate("/");
  };

  const goShipAgency = () => {
    navigate("/shipAgency");
  };

  const goPortService = () => {
    navigate("/portService");
  };

  const goShip = () => {
    navigate("/ship");
  };

  const goCareer = () => {
    navigate("/career");
  };

  const goConnect = () => {
    navigate("/connect");
  };

  const goGalaries = () => {
    navigate("/galaries");
  };

  useEffect(() => {
    setMenuItems(menuData.Items);
  }, []);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isHomePage = location.pathname === "/";

  return (
    <NavbarContainer >
      <NavbarOverlay>
        <NavbarContent>
          <FaBarsIcon onClick={toggleMenu} size={30} color="white" as={FaBars} />
          <SocialIconsContainer>
          <SocialIconLink href="#">
              <BiLogoFacebook />
            </SocialIconLink>
            <SocialIconLink href="#">
              <BiLogoLinkedin />
            </SocialIconLink>
            <SocialIconLink href="#">
              <BiLogoTwitter />
            </SocialIconLink>
            <SocialIconLink href="#">
              <BiLogoInstagram />
            </SocialIconLink>
            <SocialIconLink href="#">
              <BiLogoYoutube />
            </SocialIconLink>
          </SocialIconsContainer>
          <LogoContainer>
            <img src={Logo} alt="#" />
          </LogoContainer>
          <LanguageListContainer>
            <LanguageListItem>Az</LanguageListItem>
            <LanguageListItem>En</LanguageListItem>
            <LanguageListItem>Ru</LanguageListItem>
          </LanguageListContainer>
        </NavbarContent>
        <NavbarMenu isOpen={menuOpen}>
          <MenuList>
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                onClick={() => {
                  if (item.name === "Ana Səhifə") {
                    goHome();
                  } else if (item.name === "Haqqımızda") {
                    goAbout();
                  } else if (item.name === "Xidmətlər") {
                    
                  } else if (item.name === "Gəmilər") {
                    goShip();
                  } else if (item.name === "Karyera") {
                    goCareer();
                  } else if (item.name === "Əlaqə") {
                    goConnect();
                  } else if (item.name === "Qaleriya") {
                    goGalaries();
                  }
                }}
                isActive={activePage === item.name.toLowerCase()}
              >
                {item.name}
                {item.name === "Xidmətlər" && (
                  <Dropdown>
                    <Dropdown.Toggle style={{color: 'white' }} variant="transparan" >
                      
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                      <Dropdown.Item onClick={goShipAgency}>Ship Agency</Dropdown.Item>
                      <Dropdown.Item onClick={goPortService}>Port Service</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </MenuItem>
            ))}
          </MenuList>
        </NavbarMenu>
        {isHomePage && <SlideHeader />}
        <div>
          <NavbarHeader className="animate__animated animate__bounceIn">{props.text}</NavbarHeader>
        </div>
      </NavbarOverlay>
    </NavbarContainer>
  );
};

export default Navbar;
