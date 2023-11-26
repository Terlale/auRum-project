import React, { useState } from "react";
import styled from "styled-components";

const ConnectForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    answer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormWrapper onSubmit={handleSubmit} className="animate__animated animate__bounceInRight">
      <StyledHeader>Müraciət üçün ərizə</StyledHeader>
      <hr />
      <FormStyled>
        <InputGroup>
          <Label>Ad*</Label>
          <Input
            type="text"
            name="firstName"
            placeholder="Adınız"
            value={formData.firstName}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Soyad*</Label>
          <Input
            type="text"
            name="lastName"
            placeholder="Soyadınız"
            value={formData.lastName}
            onChange={handleChange}
          />
        </InputGroup>
      </FormStyled>
      <FormStyled>
        <InputGroup>
          <Label>Telefon*</Label>
          <Input
            type="tel"
            placeholder="+994 50 999 99 99"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>E-mail*</Label>
          <Input
            type="email"
            name="email"
            placeholder="E-mail ünvanınızı daxil edin"
            value={formData.email}
            onChange={handleChange}
          />
        </InputGroup>
      </FormStyled>
      <FileWrapper>
        <Label>Müraciətiniz*</Label>
        <UploadInput
          type="text"
          id="answer"
          name="answer"
          placeholder="Müraciətiniz..."
          onChange={handleChange}
        />
      </FileWrapper>
      <div style={{ textAlign: "center" }}>
        <SubmitButton type="submit">Göndər</SubmitButton>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  box-sizing: border-box;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  padding: 80px 0px 0px 0px;
`;

const FormStyled = styled.div`
  display: flex;
  gap: 60px;

  @media screen and (max-width: 760px) {
    display: flex;
    gap: 0px;
    flex-direction: column;
  }
`;

const FileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 20px;
`;

const UploadInput = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  width: 100%;
  height: 100px;
  background-color: rgba(206, 189, 136, 0.22);

  @media screen and (max-width: 1196px) {
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  width: 300px;
  height: 50px;
  background-color: rgba(206, 189, 136, 0.22);

  @media screen and (max-width: 1196px) {
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: rgba(40, 54, 75, 1);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 184px;
  height: 50px;
`;

export default ConnectForm;
