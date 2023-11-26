import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloudUpload } from "react-icons/ai";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, cv: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <FormWrapper onSubmit={handleSubmit}>
      <StyledHeader>Müraciət üçün ərizə</StyledHeader>
      <hr />
      <FormStyled>
        <InputGroup>
          <Label>Ad*</Label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>Soyad*</Label>
          <Input
            type="text"
            name="lastName"
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
            placeholder="050"
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
            value={formData.email}
            onChange={handleChange}
          />
        </InputGroup>
      </FormStyled>
      <FileWrapper>
        <Label>CV*</Label>
        <UploadLabel htmlFor="cv">
          <AiOutlineCloudUpload style={{ fontSize: "36px" }} />
          <p style={{ fontSize: "14px" }}>Fayl yukle</p>
        </UploadLabel>
        <UploadInput
          type="file"
          id="cv"
          name="cv"
          onChange={handleFileChange}
        />
      </FileWrapper>
      <div style={{textAlign: "center"}}><SubmitButton type="submit">Submit</SubmitButton></div>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  @media screen and (max-width: 760px) {}
  max-width: ;
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
  font-size:24px;
  font-weight:bold;
  line-height:30px;
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
  align-items: center;
  margin-bottom: 20px;
  align-items: flex-start;
  flex-direction: column;
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  background-color: rgba(206, 189, 136, 0.22);
  border: none;
  color: rgba(171, 170, 171, 1);
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  width: 538px;
  height: 50px;
  background-color: rgba(206, 189, 136, 0.22);

  @media screen and (max-width: 1196px) {
    width: auto;

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

export default ApplicationForm;
