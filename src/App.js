import React from "react";
import Homepage from "./pages/Homepage";
import {
  BrowserRouter as HashRouter,
  Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter basename="/Bus-Search-System">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
