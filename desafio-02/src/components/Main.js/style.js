import styled from "styled-components";
import ImgBackground from "../../assets/wallpaper.jpeg";

export const HeroSection = styled.section`
    height: 38rem;
    width: 100%;
    margin-bottom: 7rem;
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
    max-width: 199.2rem;
    margin: 0 auto;
    padding: 0 10rem;
    height: 100%;
    position: relative;
`;

export const HeroText = styled.div`
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    z-index: 1;
    h1 {
        font-size: 4.8rem;
        font-weight: 600;
        margin-bottom: 2.6rem;
        line-height: 1.2;
    }
    p {
        font-size: 2.4rem;
        line-height: 1.5;
        max-width: 40ch;
    }
`;

export const DestaquesSection = styled.section`
    color: #181818;
    text-align: center;
    margin-bottom: 10rem;
    h2 {
        font-size: 3.2rem;
        font-weight: 600;
        margin-bottom: 1.7rem
    }
    p{
        font-size: 2rem;
        line-height: 1.5;
        margin-bottom: 6.5rem
    }
    ul{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
        gap: 4rem 2rem;
    }
`;
