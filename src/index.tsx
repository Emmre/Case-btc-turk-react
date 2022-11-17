import React from "react"
import ReactDOM from "react-dom"
import AppProvider from "store/AppContext"
import App from "./App"
import "./styles/styled.scss"

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
