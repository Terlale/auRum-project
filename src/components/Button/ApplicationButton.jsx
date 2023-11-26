import React from "react";
import styled from "styled-components";


const ApplicationButton = () => {
  return (
    <div>
      <StyledButton>Müraciət et</StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  width: 240px;
  height: 56px;
  background-color: rgba(40, 54, 75, 1);
  color: white;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(40, 54, 75, 0.8);
    cursor: pointer;
  }
`;

export default ApplicationButton;
