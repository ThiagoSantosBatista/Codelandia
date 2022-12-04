import styled from "styled-components";
import ImgBackground from "../../assets/wallpaper.jpeg";

export const HeroSection = styled.section`
    height: 38rem;
    width: 100%;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${ImgBackground});
    z-index: -1;
    &::after {
        content: "";
        display: block;
        position: absolute;
        inset: 0 0 0 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background: rgba(24, 24, 24, 0.6);
    }
`;

export const HeroContainer = styled.div`
    max-width: 192rem;
    margin: 0 auto;
    height: 100%;
    position: relative;
`;

export const HeroText = styled.div`
    position: absolute;
    top: 50%;
    left: 10rem;
    transform: translateY(-50%);
    z-index: 1;
    h1 {
        font-size: clamp(2.8rem, 2.5vw, 4.8rem);
        font-weight: 600;
        margin-bottom: 2.6rem;
        line-height: 1.2;
    }
    p {
        font-size: clamp(1.6rem, 1.25vw, 2.4rem);
        line-height: 1.5;
        max-width: 40ch;
    }
    @media screen and (max-width: 1920px) {
        left: 5%;
    }
`;

export const DestaquesSection = styled.section`
    max-width: 192rem;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 7rem 10rem 16.2rem;
    color: #181818;

    @media screen and (max-width: 1920px) {
        padding: 7rem 5% 16.2rem;
    }

    h2 {
        font-size: clamp(2.8rem, 1.67vw, 3.2rem);
        font-weight: 600;
        margin-bottom: 1.7rem;
    }
    p {
        font-size: clamp(1.6rem, 1.04vw, 2rem);
        line-height: 1.5;
        margin-bottom: 6.5rem;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
        gap: 4rem 2rem;

        @media screen and (max-width: 400px) {
            grid-template-columns: repeat(auto-fill, minmax(29rem, 1fr));
        }
    }
`;
