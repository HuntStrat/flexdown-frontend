import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "@fontsource/lexend";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import SignUp from "./pages/utils/SignUp";
import Login from "./pages/utils/Login";
import NotFound from "./pages/utils/NotFound";
import About from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
