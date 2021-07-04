import React from "react";
import { withRouter } from "react-router-dom";
import {
  Main,
  Container,
  TitleDiv,
  TitleName,
  Title
} from "../styles/Figma.styles";

const Figma = () => {
  return (
    <>
      <Main>
          <Container>
            <TitleDiv>
              <div>
                <TitleName>Meus projetos no Figma</TitleName>
                <ul>
                    <li>
                        <a href="https://www.figma.com/file/mInMqnFTDzTzPtJEONMnQR/X11-GO?node-id=0%3A1"> <Title>Figma X11</Title> </a>
                    </li>
                    <li>
                        <a href="https://www.figma.com/proto/mInMqnFTDzTzPtJEONMnQR/X11-GO?node-id=1%3A2&viewport=-2852%2C303%2C0.46698129177093506&scaling=scale-down&hide-ui=1"> <Title>Protótipo X11</Title> </a>
                    </li>
                    <li>
                        <a href="https://www.figma.com/file/ef5DviUltaCqg4kXRHTViA/Layout-Portif%C3%B3lio?node-id=1%3A2"> <Title>Figma Portfólio</Title> </a>
                    </li>
                </ul>
              </div>
            </TitleDiv>
          </Container>
      </Main>
    </>
  );
};

export default withRouter(Figma);
