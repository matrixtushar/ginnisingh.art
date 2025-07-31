import { useState, useEffect } from "react";

function Gallery() {
  const base = import.meta.env.BASE_URL;

  const [preview, setPreview] = useState(null);
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Update on resize
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paintings = [/* unchanged painting list here */];

  const sortedPaintings = [...paintings].sort((a, b) => b.year - a.year);

  const gridStyle = {
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "80px",
    textAlign: "center",
  };

  const cardStyle = {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    transition: "transform 0.3s ease",
    display: "block",
  };

  const infoOverlayStyle = (visible) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.3s ease",
    textAlign: "center",
    padding: "10px",
    pointerEvents: "none", // To avoid blocking clicks on mobile
  });

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
    animation: "fadeIn 0.3s ease",
  };

  const previewImageStyle = {
    maxWidth: "90%",
    maxHeight: "90%",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
    animation: "zoomIn 0.3s ease",
  };

  return (
    <section id="gallery" style={{ textAlign: "center" }}>
      <h2 data-aos="fade-up" style={{ marginBottom: "30px" }}>Gallery</h2>
      <div style={gridStyle}>
        {sortedPaintings.map((painting, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={() => {
              if (isMobile) {
                setActiveOverlay(activeOverlay === index ? null : index); // toggle overlay on mobile
              } else {
                setPreview(`${base}images/${painting.src}`); // full image preview on desktop
              }
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.querySelector("img").style.transform = "scale(1.05)";
                e.currentTarget.querySelector(".info-overlay").style.opacity = 1;
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.querySelector("img").style.transform = "scale(1)";
                e.currentTarget.querySelector(".info-overlay").style.opacity = 0;
              }
            }}
          >
            <img
              src={`${base}images/${painting.src}`}
              alt={painting.title}
              data-aos="zoom-in"
              style={imageStyle}
            />
            <div
              className="info-overlay"
              style={infoOverlayStyle(activeOverlay === index || !isMobile)}
            >
              <h4>{painting.title}</h4>
              <p>{painting.size}</p>
              <p>{painting.medium}</p>
              <p>{painting.year}</p>
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div style={overlayStyle} onClick={() => setPreview(null)}>
          <img src={preview} alt="Preview" style={previewImageStyle} />
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes zoomIn {
            from { transform: scale(0.7); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}

export default Gallery;
