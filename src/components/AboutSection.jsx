// src/components/AboutSection.jsx
function AboutSection() {
    return (
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center bg-black flex flex-col justify-center items-center gap-10 p-10">
          <h1 className="text-6xl  text-white mb-4 font-bold">About Us </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-[20px]">
         Image Steganography is the art of hiding secret information within images,esuring secure communication and data protection.CipherPixel leverages advanced techniques to make invisible data storage accessible and safe for everyone. </p>
         <img className="rounded-2xl h-100 w-[800px]" src="/Image 39.jpg" alt="About Image" />
        </div>
      </section>
    );
  }
  
  export default AboutSection;
  