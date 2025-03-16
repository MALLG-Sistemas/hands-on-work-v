import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
