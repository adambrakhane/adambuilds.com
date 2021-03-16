import React from "react";
import ReactDOM from 'react-dom';
import App from './App';

import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import reportWebVitals from './reportWebVitals';
import { ThemeProvider, StyleReset } from 'atomize';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

const theme = {
  fontFamily: {
    primary:
      '"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    secondary:
      '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    code: "'Fira Mono','Roboto Mono', monospace"
  },
  colCount: 12,
  grid: {
    containerMaxWidth: {
      xl: "1920px",
    },
    gutterWidth: "16px",
  },
  textSize: {
    size: {
      display3: "48px",
      cardTitle: "20px"
    },
    height: {
      display3: "56px",
      cardTitle: "28px"
    }
  },
  colors: {
    brandgray: "#F7F5F4",
    white: "#ffffff",
    dark: "#141b24",

    brand: "#FC0E36",
    brandAlt: "#EF2840",
    brandHover: "#ea1d2c",

    success: "#1BC160",
    green: "#1BC160",
    successDark: "#36b37e",
    softSuccess: "#D7f0E5",

    danger: "#FC0E36",
    red: "#FC0E36",
    softDanger: "#FED9DB",


    warning: "#FCC246",
    yellow: "#FCC246",

    info: "#3366FF",
    blue: "#3366FF"
  },
  rounded: {
    brand: "20px",
    topOnly: {tl:"20px",tr:"20px"},
    bottomOnly: {bl:"20px",br:"20px"}
  }
};

ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
  </StyletronProvider>

  ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
