import React, { useState, useEffect } from "react";
import { Wrapper, Container, Header } from "../styles/Contact.styles";
import { HomeLink, TextLink } from "../styles/Work.styles";
import { withRouter } from "react-router";

const Contact = ({ history }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    animate &&
      setTimeout(() => {
        history.push("/");
        setAnimate(false);
      }, 400);
  }, [animate, history]);

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimate(true)} animating={animate}>
        <TextLink>Home</TextLink>
      </HomeLink>
      <Container>
        <Header>kathleen_nascimento@id.uff.br</Header>
      </Container>
    </Wrapper>
  );
};

export default withRouter(Contact);
