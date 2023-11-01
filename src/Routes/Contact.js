import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../Images/4.jpeg";
import Footer from "../Components/Footer";
import Contactform from "../Components/Contactform";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} />
      <Contactform />
      <Footer />
    </>
  );
}
export default Contact;
