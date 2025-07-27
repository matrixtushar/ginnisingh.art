function ArtistStatement() {
   const base = import.meta.env.BASE_URL;
  const containerStyle = {
    padding: "120px 20px",
    backgroundImage: `url('${base}images/watercolor-texture.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundAttachment: "fixed",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.85)",
    padding: "40px",
    borderRadius: "12px",
    maxWidth: "800px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    backdropFilter: "blur(6px)",
    animation: "fadeInUp 1s ease forwards",
    opacity: 0,
    transform: "translateY(40px)",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "700",
    color: "#222",
  };

  const textStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    textAlign: "justify",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} className="artist-card">
        <h2 style={headingStyle}>Artist Statement</h2>
        <p style={textStyle}>
My work is a conversation between the seen and the unseen — a quiet, unfolding language of color, emotion, and memory. I paint intuitively, letting go of logic and control, allowing the canvas to guide me. Each stroke, splash, and layer is a response to something deeply internal — something I often can’t name but deeply feel.
One of the most profound influences in my work has been my father. As a child my father took me to the historical sites, there he introduced me to Carvings and sculptures as well as cultural motifs. While my attention was always drawn to the intricate patterns and embellishments around them. That experience has stayed with me, and this inspiration is reflected in my current art works through detailed marker drawings. 
I am drawn to the intangible — the quiet ache of unspoken emotions, the flicker of hope, the pull of presence. Through abstraction, I give space to these invisible truths. My process begins with meditation or writing, but once I approach the canvas, I surrender. I trust the colors to lead me. I let accidents speak. I listen with my hands.
Color is my truest language. It holds weight, tension, and possibility. I am especially drawn to purple — a tone that feels like my signature, my imprint, my way of marking existence. I often build compositions that create an illusion of floating forms, layering dark tones behind and lighter hues above, allowing shapes to breathe on the surface.
My work is not about resolution — it’s about recognition. I want my paintings to hold space for emotions we often hide or silence, especially in cultures like mine where mental health and inner healing are rarely spoken of until crisis arises. My art is an offering — to feel, to question, to remember, and to begin again.
Whether through the freedom of a paint splash, the surprise of a new material, or the gentle tension between colors, I paint to connect. With myself. With the viewer. With the sacred silence that lives between thoughts.
        </p>
      </div>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default ArtistStatement;
