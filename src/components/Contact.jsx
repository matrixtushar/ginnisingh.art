import { FaEnvelope, FaInstagram} from "react-icons/fa";

function Contact() {
  return (
    <div style={{ textAlign: "center", padding: "120px 20px" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>Let's Connect</h2>
      <p style={{ marginBottom: "40px" }}>
        Reach out directly — Ginni would love to hear from you!
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <a
          href="mailto:ginni.ch.singh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "2.5rem", color: "#333", transition: "0.3s" }}
          onMouseEnter={(e) => (e.target.style.color = "#c2185b")}
          onMouseLeave={(e) => (e.target.style.color = "#333")}
        >
          <FaEnvelope />
        </a>
        <a
          href="https://instagram.com/ginni.singh"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "2.5rem", color: "#333", transition: "0.3s" }}
          onMouseEnter={(e) => (e.target.style.color = "#E1306C")}
          onMouseLeave={(e) => (e.target.style.color = "#333")}
        >
          <FaInstagram />
        </a>

      </div>
    </div>
  );
}

export default Contact;
