import exhibitions from "../data/exhibitions.json";

function Exhibitions() {
  return (
    <section style={{ padding: "80px", textAlign: "center" }}>
      <h2 data-aos="fade-up" style={{ marginBottom: "30px" }}>Exhibitions</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "left"
        }}
      >
        {exhibitions.map((exhibit, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              border: "1px solid #eee",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              backgroundColor: "#fff"
            }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 style={{ margin: "0 0 10px", color: "#d97706" }}>
              {exhibit.title}
            </h3>
            <p style={{ margin: "0 0 5px", fontWeight: "500" }}>
              {exhibit.location} • {exhibit.year}
            </p>
            <p style={{ margin: 0 }}>{exhibit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Exhibitions;
