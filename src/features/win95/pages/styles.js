import styled, { createGlobalStyle } from "styled-components";
import Win95 from '../assets/win95.ttf'
import MsSans from '../assets/MsSans.ttf'
import DigitalDismay from '../assets/digital-dismay.otf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Win95';
        src: url(${Win95}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'MsSans';
        src: url(${MsSans}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'DigitalDismay';
        src: url(${DigitalDismay}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

  body {
    font-family: 'Win95', sans-serif;
    user-select: none;
  }
`

export const WinScreen = styled.div`
    background-color: #098684;
    height: 100vh;
    width: 100vw;
`

export const MainScreen = styled.div`
    position: relative;
    overflow: hidden;
    height: calc(100% - 40px);
`

export const DialogLayer = styled.div`
    position:absolute;
    z-index: 10;
    height: 0px;
    width: 0px;
`

export const IconsLayer = styled.div`
    padding: 25px;
    height: 100%;
    width: 100%;
`
