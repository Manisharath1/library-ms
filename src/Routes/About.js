import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../Images/4.jpeg";
import Footer from "../Components/Footer";
import DetailUs from "../Components/DetailUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="" />

      <DetailUs />
      <Footer />
    </>
  );
}
export default About;
