import React, { useState, useEffect } from "react";
import { Wrapper, Container, Header, ContainerSocialContact } from "../styles/Contact.styles";
import { HomeLink, TextLink } from "../styles/Work.styles";
import { withRouter } from "react-router";
import { SocialItem } from "../styles/Navigation.styles";
import {
  LinkedIn
} from "../components/Socials";

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
        <ContainerSocialContact>
          <SocialItem>
            <LinkedIn />
          </SocialItem>
        </ContainerSocialContact>
      </Container>
    </Wrapper>
  );
};

export default withRouter(Contact);
