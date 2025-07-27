import Navbar from "./components/Navbar";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Exhibitions from "./components/Exhibitions";
import CV from "./components/CV";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ArtistStatement from "./components/ArtistStatement.jsx";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
       <Layout>
      <div style={{ paddingTop: "0px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/artist-statement" element={<ArtistStatement />} />
          <Route path="*" element={<h2 style={{ textAlign: "center" }}>Page Not Found</h2>} />
        </Routes>
      </div>
      </Layout>
       
    </>
  );
}
export default App;
