// src/components/HeroSection.jsx
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section
  className="bg-cover bg-center bg-no-repeat py-20 min-h-[95vh] flex items-center justify-center flex-col w-full"
  style={{ backgroundImage: "url('/landingpage_image1.jpg')" }}
>

      <div className="container mx-auto px-4 text-center  ">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">Unlock the Secret of Your Images</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Discover the art of Image Steganography and encode hidden messsage effortlessly</p>
        <Link to="/embed">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">Start Encoding Now</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
