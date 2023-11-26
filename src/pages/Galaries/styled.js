import styled from "styled-components";

export const StyledGalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 45px;
  background-color: #CEBD8833;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export default StyledGalleryContainer;
