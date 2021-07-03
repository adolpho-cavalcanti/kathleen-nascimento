import React from "react";
import { withRouter } from "react-router-dom";
import {
  Main,
  Container,
  TitleDiv,
  TitleName,
  Title,
  Banner,
  BannerSpaceEmpty,
  BannerSpaceLogo,
  GridTelas,
  Item1,
  Item2,
  TextItem1,
  TextPadrao,
  TitleSection,
  ProcessCreative,
  InterfaceUSer,
  IdentidadeVisual
} from "../styles/Portfolio.styles";
const logo = require("../assets/portfolio/x11/logo-x11.png");
const telaUnidas1 = require("../assets/portfolio/x11/telas-unidas1.png");
const telaUnidas2 = require("../assets/portfolio/x11/telas-unidas2.png");
const prototipo = require("../assets/portfolio/x11/desenho-telas.png");
const telas = require("../assets/portfolio/x11/telas.png");
const identidadeVisual = require("../assets/portfolio/x11/identidade-visual.png");

const Portfolio = ({ history }) => {
  return (
    <>
      <Main>
          <Container>
            <TitleDiv>
              <div>
                <TitleName>X11 GO</TitleName>
                <Title>
                  é um sistema de gerenciamento para times de E-SPORTS no modo X-11 de jogo de futebol PES
                </Title>
              </div>
            </TitleDiv>
            <Banner>
                <BannerSpaceEmpty></BannerSpaceEmpty>
                <BannerSpaceLogo>
                  <div>
                    <img alt="Logo" src={logo} />
                  </div>
                </BannerSpaceLogo>
            </Banner>
            <GridTelas>
              <Item1>
                <img alt="Logo" src={telaUnidas1} width="80%" />
                <div style={{margin: 50}}>
                  <TextItem1>
                    Foi criado um sistema tipográfico elegante e limpo, injetado com pequenos momentos de magia neon
                  </TextItem1>
                </div>
              </Item1>
              <Item2>
                <img alt="Logo" src={telaUnidas2} width="80%" />
              </Item2>
            </GridTelas>
            <TitleDiv>
              <TitleSection>Processo criativo</TitleSection>
              <TextPadrao>
                Durante o processo criativo, foi pensado em categorias dinâmicas e funcionais tanto para os treinadores quanto para os jogadores. O que antes era resolvido pelo aplicativo de mensagens agora teria uma plataforma tanto para montar campeonatos, escalação do time, ver a disponibilidade dos jogadores, ter um histórico de partidas, quanto um perfil para o time e jogadores, para visitas e contatações.
              </TextPadrao>
              <ProcessCreative>
                <img alt="Protótipo" src={prototipo} />
              </ProcessCreative>
            </TitleDiv>
            <TitleDiv>
              <TitleSection>Considerações de interface de usuário</TitleSection>
              <TextPadrao>
                Ao desenrolar todas as telas, muita atenção foi dada para que as hierarquias de cores fossem respeitadas. O espaço em preto foi usado generosamente para manter os layouts organizados e para equilibrar a vibração das cores dos ícones criptográficos.
              </TextPadrao>
            </TitleDiv>
            <InterfaceUSer>
              <img alt="Protótipo" src={telas} />
            </InterfaceUSer>
            <TitleDiv style={{marginTop:70}}>
              <TitleSection>Identidade visual</TitleSection>
              <TextPadrao>
              Usando cores neon forte e simples e tipografia confiável,  foi criada diretrizes de marca digital rápidas e eficazes.O contraste do fundo preto com as cores neon foi usado para representar a ideia de um espaço jovem, moderno e elegante.
              </TextPadrao>
            </TitleDiv>
            <IdentidadeVisual>
              <div>
                <img alt="Protótipo" src={identidadeVisual} />
              </div>
            </IdentidadeVisual>

                <a href="https://www.figma.com/file/mInMqnFTDzTzPtJEONMnQR/X11-GO?node-id=0%3A1">Figma X11</a>
                <a href="https://www.figma.com/proto/mInMqnFTDzTzPtJEONMnQR/X11-GO?node-id=1%3A2&viewport=-2852%2C303%2C0.46698129177093506&scaling=scale-down&hide-ui=1">Protótipo X11</a>
                <a href="https://www.figma.com/file/ef5DviUltaCqg4kXRHTViA/Layout-Portif%C3%B3lio?node-id=1%3A2">Figma Portfólio</a>
          </Container>
      </Main>
    </>
  );
};

export default withRouter(Portfolio);
