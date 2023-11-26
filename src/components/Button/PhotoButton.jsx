import React, { useRef } from "react";
import styled from "styled-components";

const StyledButton = styled.label`
  width: 210px;
  height: 60px;
  border: 2px solid #28364b;
  background-color: #28364b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(57 76 105);
  }

  input {
    display: none;
  }
`;

const ContainerButton = styled.div`
  border: 2px dashed #28364b;
  width: 230px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoButton = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <ContainerButton>
      <StyledButton onClick={handleButtonClick}>
        Foto
        <input type="file" ref={fileInputRef} />
      </StyledButton>
    </ContainerButton>
  );
};

export default PhotoButton;
