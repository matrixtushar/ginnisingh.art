import { useState } from "react";

function About() {
  const base = import.meta.env.BASE_URL;
  const [readMore, setReadMore] = useState(false);

  const shortText = `
    In a world that often silences the invisible, I paint to give voice to the unseen. I am Ginni Singh, a contemporary Indian artist whose practice is rooted in intuitive expression, emotional depth, and the dialogue between color and consciousness. My canvases are not mere surfaces—they are sacred spaces where emotions take form, colors converse, and silence speaks.
  `;

  const fullText = `
    Trained in fine arts and deeply influenced by Indian architecture, classical music, and nature, my work explores the complex inner terrain of human experience. Shades of purple, a signature in my art, embody presence, transformation, and spiritual resonance. Through the interplay of acrylics, markers, and layered textures, I attempt to capture that which cannot be named—grief, desire, healing, and the courage to begin again.

    My father profoundly shaped my artistic vision. As a child, visits to historical
    sites with him exposed me to carvings, sculptures, and cultural motifs. While he admired
    human figures, I was captivated by the intricate patterns and embellishments—elements that
    now unconsciously appear in my work.

    Here, you’ll find not only my artworks but also fragments of my journey—stories of survival, struggle, and surrender. I invite you to slow down, feel, and perhaps see a reflection of your own unspoken emotions in my work.

    Welcome to my world—where color becomes language, and vulnerability becomes strength.
  `;

  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h2 data-aos="fade-up" style={{ marginBottom: "30px", textAlign: "center" }}>
        About Me
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Artist Image */}
        <img
          src={`${base}images/about.jpg`}
          alt="Ginni Singh"
          style={{
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
          }}
        />

        {/* Artist Bio */}
        <div style={{ flex: "1", textAlign: "left" }}>
          <p style={{ fontSize: "18px", lineHeight: "1.8", whiteSpace: "pre-line" }}>
            {readMore ? fullText : shortText}
          </p>
          <button
            onClick={() => setReadMore(!readMore)}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              fontSize: "16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              background: "#333",
              color: "#fff",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#555")}
            onMouseLeave={(e) => (e.target.style.background = "#333")}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
