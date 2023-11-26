import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Back from "./../img/back.jpg";

export const NavbarContainer = styled.div`
  background-image: url(${Back});
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  height: 100vh;

  @media screen and (max-width: 756px) {
    max-width:100%;
    
  }
`;

export const NavbarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: linear-gradient(
    180deg,
    #28364b 0%,
    rgba(40, 54, 75, 0.77) 46.44%,
    rgba(40, 54, 75, 0) 100%
  );
  z-index: 1;
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 70px;

  @media screen and (max-width: 756px) {
    padding: 20px;
    gap: 10px;
    font-size: 14px; /* Adjust font size for smaller screens */
    align-items: center;
  }
`;

export const SocialIconsContainer = styled.div`
  color: #cebd88;
  display: flex;
  gap: 10px;

  @media screen and (max-width: 756px) {
    display: none;
  }
`;

export const SocialIconLink = styled.a`
  color: #cebd88;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: white;
  }
`;

export const LogoContainer = styled.div`
  width: auto;
  max-width: 150px;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`;

export const LanguageListContainer = styled.ul`
  list-style: none;
  color: white;
  display: flex;
  gap: 20px;
`;

export const LanguageListItem = styled.li`
  &:hover {
    color: #cebd88;
  }
`;

export const FaBarsIcon = styled(FaBars)`
  display: block;

  @media screen and (min-width: 756px) {
    display: none;
  }
`;

export const NavbarMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  background-color: #28364b9c;
  padding: 5px 20px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")}; // Slide in from the right when open

  @media screen and (min-width: 756px) {
    display: flex;
    flex-direction: row;
    position: static;
    background-color: transparent;
    transform: translateX(0);
    flex-direction: column;
    padding: 80px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 10px;
 

  @media screen and (min-width: 756px) {
    color: white;
    border-bottom: 3px solid #ffffff85;
    justify-content: space-evenly;
    flex-direction: row;
   
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  color: white;
  transition: color 0.3s ease-in-out;
  display:flex;
  gap:10px;
  &:hover {
    color: #cebd88;
    position: relative;
    padding-bottom: 5px;
    align-items: center;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #cebd88;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const NavbarHeader = styled.h1`
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  color: white;
  margin-top: 20px; 

  @media screen and (max-width: 756px) {
    font-size: 23px;
  }
`;
export const DropdownMenu = styled.div`
  // Include styles for DropdownMenu if needed
`;

export const DropdownItem = styled.div`
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  background-color: rgba(206, 189, 136, 0.22);
  color: rgba(171, 170, 171, 1);
  border-radius: 5px;
  margin: 5px 0;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(206, 189, 136, 0.4);
    color: white;
  }
`;