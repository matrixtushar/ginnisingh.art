import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 150px)" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
