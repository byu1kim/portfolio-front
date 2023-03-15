import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import { GlobalProvider } from "./components/Context";

function Routers() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<Detail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default Routers;
