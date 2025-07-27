import { FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer style={footerStyle}>
      <p style={{ marginBottom: "10px" }}>
        © {new Date().getFullYear()} Ginni Singh. All rights reserved.
      </p>
      <div style={iconContainerStyle}>
        <a href="https://instagram.com/ginni.singh" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaInstagram size={24} />
        </a>
        <a href="mailto:ginni.ch.singh@gmail.com" style={iconStyle}>
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  textAlign: "center",
  borderTop: "2px solid #eee",
  marginTop: "50px",
  color: "#555",
};

const iconContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
};

const iconStyle = {
  color: "#5a3dff",
  transition: "color 0.3s",
};

export default Footer;
