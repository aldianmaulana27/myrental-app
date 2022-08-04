import React from "react";
import styled from "styled-components";
import { AboutData } from "../data/AboutData";
import { Button } from "./Button";

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
const Container = styled.div`
  padding: 3rem calc(100vw = 1300px) / 2;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse === true ? 2 : 1)};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 2vw, 2rem);
  }
  p {
    margin-bottom: 1rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse === true? 1 : 2)};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    order: ${({ reverse }) => (reverse === true ? 1: 2)};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const About = () => {
  return (
    <>
    {AboutData.map((item, index) => (
     
    <Section key={index}>
    <Container id="about" >
        <ColumnLeft reverse={item.reverse}>
            <h1>{item.heading}</h1>
            <p>{item.paragraphOne}</p>
            <p>{item.reverse}</p>
            <Button to="/home" primary="true">
              {item.buttonLabel}
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={item.reverse}>
              <img src={item.image} alt="home" />
          </ColumnRight>
      </Container>
    </Section>

              ))}
    </>
    
  );
};

export default About;
