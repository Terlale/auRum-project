import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  width: 150px;
  height: 48px;
  border: 3px solid rgba(206, 189, 136, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  width: 140px;
  height: 38px;
  border: none;
  background-color: rgba(206, 189, 136, 1);
`;

const Button = () => {
  return (
    <StyledButtonContainer>
      <StyledButton>Ətraflı</StyledButton>
    </StyledButtonContainer>
  );
};

export default Button;
