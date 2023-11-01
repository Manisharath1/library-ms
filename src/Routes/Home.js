import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://i.ytimg.com/vi/glKdwHwCqVo/maxresdefault.jpg"
      />
      <Footer />
    </>
  );
}
export default Home;
