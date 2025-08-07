import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setOffset(window.scrollY);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const base = import.meta.env.BASE_URL;

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "left",
        backgroundImage: `url('${base}images/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: `center ${offset * 0.4}px`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        padding: isMobile ? "20px" : "0 50px",
        position: "relative",
        transition: "background-position 0.2s ease-out",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      {/* Left Image */}
      <div
        style={{
          flex: isMobile ? "unset" : "1",
          width: isMobile ? "100%" : "auto",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          maxHeight: isMobile ? "40vh" : "none",
          overflow: "hidden",
          marginBottom: isMobile ? "30px" : "0",
        }}
      >
        <img
          src={`${base}images/about.jpg`}
          alt="Ginni in Studio"
          style={{
            width: isMobile ? "100%" : "80%",
            height: "auto",
            maxHeight: isMobile ? "100%" : "500px",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
            transform: "scale(1)",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Right Content */}
      <div
        style={{
          flex: isMobile ? "unset" : "1",
          zIndex: 2,
          paddingLeft: isMobile ? "0" : "40px",
          textAlign: isMobile ? "center" : "left",
          minHeight: isMobile ? "50vh" : "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            fontSize: "1.2rem",
            marginBottom: "30px",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          "Between aches and joy, I paint what the heart remembers and the mind forgets. My work is a quiet call towards feeling, healing and becoming whole."
        </p>
        <Link
          to="/gallery"
          style={{
            display: "inline-block",
            padding: "12px 30px",
            fontSize: "18px",
            color: "#fff",
            backgroundColor: "#ff6f61",
            textDecoration: "none",
            borderRadius: "5px",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#e65b50")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6f61")}
        >
          View Gallery
        </Link>
      </div>
    </section>
  );
}

export default Home;
