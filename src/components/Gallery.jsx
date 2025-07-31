import React, { useState } from "react";

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
    { src: "painting24.jpg", title: "Introspection - III", size: "30 x 40 inches", medium: "Charcoal on Paper", year: "2022" }
  ];

  const [selected, setSelected] = useState(null);
  const sortedPaintings = [...paintings].sort((a, b) => b.year - a.year);

  return (
    <section id="gallery" style={{ padding: "40px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "30px" }}>Gallery</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {sortedPaintings.map((painting, index) => (
          <img
            key={index}
            src={`${base}images/${painting.src}`}
            alt={painting.title}
            style={{ width: "100%", borderRadius: "8px", cursor: "pointer" }}
            onClick={() => setSelected(painting)}
          />
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <img
              src={`${base}images/${selected.src}`}
              alt={selected.title}
              style={{ maxWidth: "100%", maxHeight: "60vh", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "20px", fontSize: "1.2rem" }}>{selected.title}</h3>
            <p style={{ margin: "5px 0" }}>{selected.size}</p>
            <p style={{ margin: "5px 0" }}>{selected.medium}</p>
            <p style={{ margin: "5px 0" }}>{selected.year}</p>
            <button
              onClick={() => setSelected(null)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                border: "none",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
