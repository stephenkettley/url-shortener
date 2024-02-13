import "./App.css";
import CTASection from "./components/CTASection";
import FeatureBoxSection from "./components/FeatureBoxSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ShortenSection from "./components/ShortenSection";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <ShortenSection></ShortenSection>
      <StatsSection></StatsSection>
      <FeatureBoxSection></FeatureBoxSection>
      <CTASection></CTASection>
      <Footer></Footer>
    </>
  );
}

export default App;
