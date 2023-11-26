import React, { useState, useEffect } from "react";
import styled from "styled-components";
import menuData from "./vacansy.json";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import ApplicationButton from "../Button/ApplicationButton";

const Inform = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    setVacancies(menuData.vacancies);
  }, []);

  const [showInfo, setShowInfo] = useState({});

  const toggleInfo = (id) => {
    setShowInfo((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <h1 style={{fontSize:"32px"}}>Karyera</h1>
      {vacancies.map((item) => (
        <div key={item.id} style={{ padding: "20px 0px" }}>
          <hr />
          <StyledButton onClick={() => toggleInfo(item.id)}>
            <StyledIcon>
              <StyledHeading>{item.title}</StyledHeading>
              {showInfo[item.id] ? <AiOutlineUp /> : <AiOutlineDown />}
            </StyledIcon>
            <StyledInfo >
              <StyledInfoItem>
                <CiLocationOn />
                {item.location}
              </StyledInfoItem>
              <StyledInfoItem>
                <CiCalendar />
                {item.date}
              </StyledInfoItem>
            </StyledInfo>
          </StyledButton>
          {showInfo[item.id] && (
            <div>
              <p style={{width: "60%", lineHeight:"1.3rem"}}>{item.description}</p>
              <StyledParagraph>
                <SpanStyled>Cinsi: </SpanStyled> {item.gender}
              </StyledParagraph>
              <StyledParagraph>
                <SpanStyled>Yaş: </SpanStyled> {item.age}
              </StyledParagraph>
              <StyledParagraph>
                <SpanStyled>Dil bilikləri: </SpanStyled> {item.language}
              </StyledParagraph>
              <StyledParagraph>
                <SpanStyled>İş stajı: </SpanStyled> {item.experience}
              </StyledParagraph>
              <StyledParagraph>
                <SpanStyled>İş qrafiki: </SpanStyled> {item.hours}
              </StyledParagraph>
              <StyledParagraph>
                <SpanStyled>Əmək haqqı: </SpanStyled> {item.salary}
              </StyledParagraph>
              <StyledParagraph>
                <SpanStyled>Son müraciət: </SpanStyled> {item.request}
              </StyledParagraph>
              <ApplicationButton />
              
            </div>
           
          )}
           
        </div>
      ))}
    </div>
  );
};

const StyledButton = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;
  padding:10px 0px;
  
`;

const StyledHeading = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size:24px;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 140px;
`;

const StyledInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size:14px;
  color: #5b5b5b;
`;

const StyledParagraph = styled.p`
 line-height: 2rem;
`;
const SpanStyled = styled.span`
  font-weight: bold;
`;

export default Inform;
