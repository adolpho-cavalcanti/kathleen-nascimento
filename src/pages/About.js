import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  Heading,
  Subtitle,
  X,
  ExperienceContainer,
  ExperienceTitle,
  DetailBlock,
  DetailPoint,
  WorkLink,
  TextLink,
  HomeLink,
  HomeText,
  Hero,
  Body,
  ImageBackground,
  Overlay,
  Container,
  RoleTime,
  Role,
  Time,
  Client
} from "../styles/About.styles";

const About = ({ history }) => {
  const [animateWork, setAnimateWork] = useState(false);
  const [animateHome, setAnimateHome] = useState(false);

  useEffect(() => {
    animateWork &&
      setTimeout(() => {
        setAnimateWork(false);
        history.push("/work");
      }, 400);
    animateHome &&
      setTimeout(() => {
        setAnimateHome(false);
        history.push("/");
      }, 400);
  }, [animateWork, animateHome, history]);

  const lazer = require("../assets/portfolio/x11/foto-lazer.jpeg");

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimateHome(true)} animating={animateHome}>
        <HomeText>Home</HomeText>
      </HomeLink>
      <Body>
        <ImageBackground backgroundImage={lazer}>
          <Overlay />
        </ImageBackground>
        <Container>
          <Hero>
            <Heading>Quem sou eu?</Heading>
            <Subtitle>
              Sou Kathleen Nascimento, uma garota natural da capital paulista, 
              mas que cresceu nos montes claros de Minas Gerais, 
              onde se apaixonou pela música e pela dança. 
              Atualmente moro em Niterói, a cidade sorriso no Rio de Janeiro, 
              onde continuei a tocar meu violino em orquestras, 
              mas também me interessei pelo design, 
              onde aprendi um pouco sobre Desenho Industrial pela UFF. 
              Em geral, estou sempre curiosa. 
              Eu gostaria de pensar que sou uma designer UX/UI sólida, 
              mas sei que tenho muito a aprender e 
              tenho a missão de aprender algo novo todos os dias. 
              Espero ter a chance de crescer com você!
            </Subtitle>
          </Hero>
        </Container>
      </Body>
      <WorkLink onClick={() => setAnimateWork(true)} animating={animateWork}>
        <TextLink>Dê uma olhada em meu Portfólio!</TextLink>
      </WorkLink>
    </Wrapper>
  );
};

export default withRouter(About);
