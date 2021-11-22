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
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
