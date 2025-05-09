import React from 'react';

const steps = [
    {
      img: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d',
      text: 'Select an Image from Your Device to Encode',
    },
    {
      img: 'https://static.vecteezy.com/system/resources/thumbnails/006/537/224/small/abstract-modern-tech-of-programming-code-screen-developer-photo.jpg',
      text: 'Choose a Coding Method for Image Encoding',
    },
    {
      img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      text: 'Process the Image to Either Encode or Decode it',
    },
    {
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      text: 'Save the Encoded Image to Your Device',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8DDrVz6E2fVcdWAe-veEtixr1mhSOPM3Kw&s',
      text: 'View the Decoded Image for Verification',
    },
  ];
  

const HowItWorks = () => {
  return (
    <section className="bg-black text-white py-16 px-4 ">
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="flex flex-col space-y-8 items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-6">
              <img
                src={step.img}
                alt={`Step ${index + 1}`}
                className="w-16 h-16 object-cover rounded-xl shadow-lg"
              />
              <p className="text-lg">{step.text}</p>
            </div>
          ))}
        </div>
      </div>


     <div className='flex items-center justify-center mt-35'>
     <div className='bg-violet-500 flex h-[500px] w-[80%] rounded-2xl'>
        <div className='flex flex-col gap-10 items-start justify-center p-10 w-[50%]'>
            <h1 className='text-6xl  text-white mb-4 font-bold leading-18'>Ready to Secure Your Images?</h1>
            <p className="text-white max-w-2xl mx-auto text-[22px] leading-8">Protect your precious memory with CipherPixel.Start your journey towards  secure and private Image storage today!</p>
            <button className='bg-black text-white p-2 font-bold rounded-xl mt-10 cursor-pointer '>Join for Free</button>
        </div>
        <div className='h-[500px]'>
            <img className='h-[500px]' src="/landingpage_image3.jpg" alt="image" />
        </div>
      </div>
     </div>
    </section>
  );
};

export default HowItWorks;
