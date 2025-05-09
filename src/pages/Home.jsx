// src/pages/Home.jsx
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';

function Home() {
  return (
    <>
      {/* <div className='bg-black text-white'> */}
      <HeroSection />
      <AboutSection />
      <HowItWorks/>
      {/* </div> */}
      {/* <FeaturesSection /> */}
    </>
  );
}

export default Home;
