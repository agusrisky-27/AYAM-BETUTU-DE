import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import OrderForm from "./components/OrderForm";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <OrderForm />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WA Button */}
      <a href="https://wa.me/6281234567890" className="float-wa" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}
