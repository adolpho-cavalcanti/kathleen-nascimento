import styled from "styled-components";
import theme from "./theme";

export const Main = styled.main`
    opacity: 1;
    width: 100%;
    display: block;
    position: relative;
    transition: opacity 0.2s ease-in-out;
    overflow: hidden;
    background-color: ${theme.colors.black};
    padding: 4rem 0;
`;

export const Container = styled.div`
    width: 100%;
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
    margin: 0 0.5rem;
`;

/** Banner X11 Go */
export const Banner = styled.div`
    width: 100%;
    background: linear-gradient(270deg, #000000 63.7%, #420C3C 86.12%, #500C49 89.98%, #802D68 93.84%, #FE00E3 100%);
    height: 463px;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
`;

export const BannerSpaceEmpty = styled.div`
    /* width: 50%; */
`;

export const BannerSpaceLogo = styled.div`
    display: flex;
    div{
        display: flex;
        align-items: center;
        img{
            max-width: 340px;
            max-height: 340px;
        }
    }
`;

export const GridTelas = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 5rem 1rem;
    @media(max-width: 800px) {
        display: block;
    }
`;

export const Item1 = styled.div`
    width: 50%;
    @media(max-width: 800px) {
        width: 100%;
    }
`;
export const TextItem1 = styled.p`
    margin: 1rem 0;
    font-weight: 800;
    font-size: max(1.25rem, 1vw);
    line-height: max(1rem, 2vw);
`;

export const TitleSection = styled.p`
    font-Weight: 700;
    font-size: max(2rem, 3vw);
    line-height: max(1rem, 3vw);
`;

export const TextPadrao = styled.p`
    margin-top: 2rem;
    font-size: max(1.25rem, 1vw);
    line-height: max(1rem, 2vw);
    font-weight: 300;
`;

export const Item2 = styled.div`
    width: 50%;
    margin-top: 5rem;
    @media(max-width: 800px) {
        width: 100%;
        margin-top: 0;
    }
`;

export const ProcessCreative = styled.div`
    width: 100% !important;
    background-color: #000;
    padding: 2rem;
    box-shadow: 19px 17px 8px 0px #000000DE;
    height: 463px;
    margin: 1rem 0;
    display: flex;
    img{
        width: 100%;
        height: 100%;
    }
`;

export const InterfaceUSer = styled.div`
    width: 100%;
    background-color: #D8D8D8;
    height: 672px;
    margin: 1rem 0;
    img{
        width: 100%;
        height: 100%;
    }
`;

export const IdentidadeVisual = styled.div`
    width: 100%;
    height: 100%;
    margin: 1rem 0;
    padding: 0 3rem 0;
    div{
        max-width: 800px;
        margin: auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
`;
