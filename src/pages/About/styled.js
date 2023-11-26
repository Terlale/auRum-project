import styled from "styled-components";
import Backgroun from "./../img/Background.svg";
import Video from "./../img/Videosection.svg";
export const Background = styled.div`
  background-image: url(${Backgroun});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding: 60px;
  position: relative;
  background-color: rgb(206 189 136 / 23%);
`;
export const BackVideoSection = styled.div`
  background-image: url(${Video});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding: 60px;
  position: relative;
`;
export const BackBlog = styled.div`
  padding: 60px;
  background-color: rgb(206 189 136 / 23%);
`;
