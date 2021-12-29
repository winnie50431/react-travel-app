import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./App.styles";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </HashRouter>
    // </ThemeProvider>
  );
}

export default App;
