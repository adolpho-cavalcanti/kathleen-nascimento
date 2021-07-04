import styled from "styled-components";
import theme from "./theme";

export const Main = styled.main`
    opacity: 1;
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    transition: opacity 0.2s ease-in-out;
    overflow: hidden;
    background-color: ${theme.colors.black};
    padding: 4rem 0;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: ${theme.colors.white};
    padding: 2rem 0;
    box-shadow: 0 .5rem 1rem rgba(255,255,255,.15);
`;
/** Texto Título */
export const TitleDiv = styled.div`
    width: 70%;
    margin: auto;
    padding: 2rem 0;
    div{
        width: 78%;
        ul{
            margin: 3rem 0;
            li{
                a{
                    text-decoration: none;
                    color: black;
                    opacity: 0.5;
                    &:hover{
                        opacity: 1;
                    }
                }
            }
        }
    }
`;

export const TitleName = styled.span`
    font-Weight: 800;
    font-size: max(1.25rem, 3vw);
    line-height: max(1rem, 3vw);
`;

export const Title = styled.span`
    font-Weight: 700;
    font-size: max(0.75rem, 1.5vw);
    line-height: max(1rem, 3vw);
    margin: 1rem;
`;