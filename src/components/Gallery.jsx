import { useState } from "react";

function Gallery() {
  const base = import.meta.env.BASE_URL;
  const paintings = [
    { src: "painting1.jpg", title: "A Call To", size: "5 x 4 feet", medium: "Acrylic and Pen on Canvas", year: "2025" },
    { src: "painting2.jpg", title: "Twilight - I", size: "18 x 18 inches", medium: "Acrylic and Pen on Canvas", year: "2024" },
    { src: "painting3.jpg", title: "Twilight - II", size: "18 x 18 inches", medium: "Acrylic and Pen on Canvas", year: "2024" },
    { src: "painting4.jpg", title: "Covers", size: "36 x 36 inches", medium: "Acrylic and Pen on Canvas", year: "2023" },
    { src: "painting5.jpg", title: "Within The Lines", size: "5 x 4 feet", medium: "Acrylic and Pen on Canvas", year: "2025" },
    { src: "painting6.jpg", title: "Beyond Silence", size: "10 x 13 inches", medium: "Charcoal on Paper", year: "2022" },
    { src: "painting7.jpg", title: "In The Blue", size: "22 x 30 inches (Each)", medium: "Mixed Media on Paper", year: "2022" },
    { src: "painting8.jpg", title: "Curtains", size: "78 x 102 inches", medium: "Acrylic and Pen on Canvas", year: "2023" },
    { src: "painting9.jpg", title: "The Final Tunnel", size: "48 x 72 inches", medium: "Acrylic and Pen on Canvas", year: "2023" },
    { src: "painting10.jpg", title: "Inner Circle", size: "28 x 100 inches", medium: "Acrylic and Pen on Canvas", year: "2023" },
    { src: "painting11.jpg", title: "Starting Before It Ends", size: "81 x 78 inches", medium: "Mixed Media on Canvas", year: "2024" },
    { src: "painting12.jpg", title: "Julagbandhi of Memories", size: "21 x 26 inches", medium: "Charcoal on Paper", year: "2022" },
    { src: "painting13.jpg", title: "Introspection - IV", size: "30 x 40 inches", medium: "Mixed Media on Paper", year: "2022" },
    { src: "painting14.jpg", title: "Wave of Life", size: "12 x 12 inches", medium: "Acrylic and Pen on Canvas", year: "2022" },
    { src: "painting15.jpg", title: "The Portal", size: "36 x 77 inches", medium: "Mixed Media on Canvas", year: "2024" },
    { src: "painting16.jpg", title: "Echo of Dreams", size: "13 x 40 inches (Each)", medium: "Mixed Media on Paper", year: "2022" },
    { src: "painting17.jpg", title: "Nostalgic Smoke", size: "40 x 60 inches", medium: "Mixed Media on Canvas", year: "2025" },
    { src: "painting18.jpg", title: "Casting Shadow", size: "18 x 78 inches (Each)", medium: "Acrylic and Pen on Canvas", year: "2024" },
    { src: "painting19.jpg", title: "Blooming Through Noise", size: "5 feet (Diameter)", medium: "Acrylic and Pen on Canvas", year: "2025" },
    { src: "painting20.jpg", title: "Whispers of Becoming", size: "5 feet (Diameter)", medium: "Acrylic and Pen on Canvas", year: "2025" },
    { src: "painting21.jpg", title: "Life is not a Race", size: "30 x 72 inches", medium: "Acrylic and Pen on Canvas", year: "2023" },
    { src: "painting22.jpg", title: "Go With The Flow", size: "51 x 31 and 16 x 30 inches", medium: "Mixed Media on Board", year: "2023" },
    { src: "painting23.jpg", title: "Sensetivity", size: "10 x 13 inches (Each)", medium: "Mixed Media on Paper", year: "2022" },
    { src: "painting24.jpg", title: "Introspection - III", size: "30 x 40 inches", medium: "Charcoal on Paper", year: "2022" },

  ];
  const sortedPaintings = [...paintings].sort((a, b) => b.year - a.year);
  const [preview, setPreview] = useState(null);

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

  const infoOverlayStyle = {
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
    opacity: 0,
    transition: "opacity 0.3s ease",
    textAlign: "center",
    padding: "10px",
  };

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
    borderRadius: "10px",
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
            onClick={() => setPreview(`${base}images/${painting.src}`)}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector("img").style.transform = "scale(1.05)";
              e.currentTarget.querySelector(".info-overlay").style.opacity = 1;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("img").style.transform = "scale(1)";
              e.currentTarget.querySelector(".info-overlay").style.opacity = 0;
            }}
          >
            <img src={`${base}images/${painting.src}`} alt={painting.title} data-aos="zoom-in" style={imageStyle} />
            <div className="info-overlay" style={infoOverlayStyle}>
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
