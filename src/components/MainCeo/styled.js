import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items:center;
  padding:60px 0px;
  gap:30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
 
`;

export const HalfWidthContainer = styled.div`
 
`;

export const ImageContainer = styled.div`

`;

export const Image = styled.img`
  width: 520px;
  border: 30px solid rgba(206, 189, 136, 0.33);
  @media (max-width: 768px) {
    width: 100%;
    border: none;
  }
`;
