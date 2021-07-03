import styled, { css } from "styled-components";
import theme from "../styles/theme";
import { LargeHead, TinyHead } from "../styles/fonts";
import {
  loadIn,
  toWork,
  toAbout,
  loadHeaders,
  loadImage,
  loadOverlay
} from "../animation/keyframes";

export const Wrapper = styled.section`
  position: relative;
  display: block;
  background-color: ${theme.colors.lightSalmon};
`;

export const WorkLink = styled.article`
  display: block;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  height: 6%;
  margin: 0;
  z-index: 3;
  transition: background-color 0.1s ease-in-out, height 0.1s ease-in-out;

  &:hover {
    height: 8%;
  }

  ${({ animating }) =>
    animating &&
    css`
      z-index: 3;
      animation: ${toWork} 0.2s ease-in-out 0s 1;
      animation-fill-mode: forwards;
      > p {
        position: relative;
        color: ${theme.colors.blueLeve};
      }
      background-color: ${theme.colors.blueLeve};
    `}

  &:hover {
    background-color: ${theme.colors.blueLeve};
    cursor: pointer;
  }

  &:hover > p {
    top: 50%;
    font-weight: 700;
  }
`;

export const WorkText = styled.p`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-weight: 300;
  transition: top 0.1s ease-in-out, color 0.1s ease-in-out,
    font-weight 0.1s ease-in-out;
`;

export const AboutLink = styled.article`
  display: block;
  width: 5%;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  margin: 0;
  z-index: 3;
  transition: background-color 0.1s ease-in-out, width 0.1s ease-in-out;

  &:hover {
    width: 6%;
  }

  ${({ animating }) =>
    animating &&
    css`
      z-index: 3;
      animation: ${toAbout} 0.2s ease-in-out 0s 1;
      animation-fill-mode: forwards;
      > p {
        position: relative;
        color: ${theme.colors.lightPurple};
      }
      background-color: ${theme.colors.lightPurple};
    `}

  &:hover {
    background-color: ${theme.colors.lightPurple};
    cursor: pointer;
  }

  &:hover > p {
    right: 10%;
    font-weight: 700;
  }
`;

export const AboutText = styled.p`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-weight: 300;
  transition: right 0.1s ease-in-out, color 0.1s ease-in-out,
    font-weight 0.1s ease-in-out;
`;

export const Article = styled.article`
  animation: ${loadIn} 0.2s ease-in-out 0s forwards;
  position: relative;
  width: 50%;
  float: left;
  height: 100%;
  overflow: hidden;

  &:first-child {
    padding: 0 5vw;
  }

  @media screen and (max-width: ${theme.mediaQueries.width.m}) {
    &:first-child {
      width: 100%;
    }
    &:nth-child(2) {
      display: none;
    }
  }
`;

export const Title = styled(LargeHead)`
  color: ${theme.colors.black};
  text-transform: uppercase;
  line-height: 1;
  position: absolute;
  top: 40%;
  left: 100%;
  animation: ${loadHeaders} 0.3s ease-in 0.1s 1 forwards;
  transform: translateY(-40%);
`;

export const Caption = styled(TinyHead)`
  color: black;
  position: absolute;
  bottom: 30%;
  display: block;
  width: 85%;
  left: 100%;
  animation: ${loadHeaders} 0.3s ease-in 0.2s 1 forwards;
`;

export const Emphasis = styled.span`
  color: ${theme.colors.purple};
`;

export const CoverSheet = styled.div`
  background-color: ${theme.colors.lightSalmon};
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${loadOverlay} 0.3s ease-in 0.55s 1 forwards;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0;
  animation: ${loadImage} 0.3s ease-in 0.55s 1 forwards;
`;
