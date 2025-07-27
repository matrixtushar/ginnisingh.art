import { useEffect, useState } from "react";
import { FaGraduationCap, FaAward, FaPaintBrush } from "react-icons/fa";

function CV() {
  const base = import.meta.env.BASE_URL;
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    fetch(`${base}cvData.json`) // Make sure cvData.json is inside `public`
      .then((res) => res.json())
      .then((data) => setCvData(data))
      .catch((err) => console.error("Failed to load CV data:", err));
  }, []);

  if (!cvData) {
    return <div style={{ padding: "120px 20px", textAlign: "center" }}>Loading CV...</div>;
  }

  const sectionStyle = {
    marginBottom: "40px",
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  };

  const titleStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.5rem",
    color: "#d97706",
    marginBottom: "15px",
  };

  const listItemStyle = {
    marginBottom: "8px",
    fontSize: "1.1rem",
    lineHeight: "1.6",
  };

  return (
    <div style={{ padding: "120px 20px", maxWidth: "900px", margin: "auto" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", textAlign: "center" }}>
        Artist CV
      </h2>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#555" }}>
        A curated summary of Ginni Singh’s education, exhibitions, and accomplishments.
      </p>

      {/* Education */}
      <section style={sectionStyle}>
        <h3 style={titleStyle}>
          <FaGraduationCap /> Education
        </h3>
        <ul style={{ paddingLeft: "20px" }}>
          {cvData.education.map((item, index) => (
            <li key={index} style={listItemStyle}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Exhibitions */}
      <section style={sectionStyle}>
        <h3 style={titleStyle}>
          <FaPaintBrush /> Exhibitions
        </h3>
        <ul style={{ paddingLeft: "20px" }}>
          {cvData.exhibitions.map((item, index) => (
            <li key={index} style={listItemStyle}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Awards */}
      <section style={sectionStyle}>
        <h3 style={titleStyle}>
          <FaAward /> Awards & Recognitions
        </h3>
        <ul style={{ paddingLeft: "20px" }}>
          {cvData.awards.map((item, index) => (
            <li key={index} style={listItemStyle}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Download Button */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a
          href={`${base}GinniSingh_CV.pdf`}
          download
          style={{
            background: "#d97706",
            color: "#fff",
            padding: "12px 25px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#b45309")}
          onMouseLeave={(e) => (e.target.style.background = "#d97706")}
        >
          Download CV (PDF)
        </a>
      </div>
    </div>
  );
}

export default CV;
