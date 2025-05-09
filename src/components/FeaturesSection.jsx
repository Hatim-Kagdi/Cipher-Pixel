// src/components/FeaturesSection.jsx
function FeaturesSection() {
    const features = [
      { title: 'Encode Messages', desc: 'Hide any text message within an image using pixel manipulation.' },
      { title: 'Decode Easily', desc: 'Extract hidden messages from uploaded images in seconds.' },
      { title: 'No Installation Needed', desc: 'Works entirely in the browser with no need to install anything.' },
      { title: 'Secure and Private', desc: 'Everything runs locally — your data is not sent to any server.' },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default FeaturesSection;
  