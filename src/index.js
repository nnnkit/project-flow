// Absolute Imports
import React from "react"
import { render } from "react-dom"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"

// Relative Imports
// import "./styles/normalize.css"
// import "./styles/style.css"
import App from "./components/app"

render(
  <ThemeProvider>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
