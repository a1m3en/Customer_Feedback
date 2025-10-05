// Navbar is now rendered in this page (imported from components/navbar)
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Brand from "./components/brand/Brand";
import CaseStudy from "./components/brand/CaseStudy";
import ChatCase from "./components/brand/ChatCase";
import Integrations from "./components/integrations/Integrations";
import Footer from "./components/footer/Footer";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Home />
      <Brand />
      <CaseStudy />
      <ChatCase />
      <Integrations />
      <Footer />
    </div>
  );
}
