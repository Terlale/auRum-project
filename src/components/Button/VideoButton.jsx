import React, { useRef } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 210px;
  height: 60px;
  border: 2px solid #28364b;
  background-color: transparent;
  color: #28364b;

  &:hover {
    background-color: #8b8b9d7d;
  }

  input {
    display: none;
  }
`;

const VideoButton = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <StyledButton onClick={handleButtonClick}>
        Video
        <input type="file" ref={fileInputRef} />
      </StyledButton>
    </div>
  );
};

export default VideoButton;
