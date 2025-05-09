import { useState, useRef } from 'react';

function EmbedForm() {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [output, setOutput] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const canvasRef = useRef();

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }
};


  function hideMessageInImage(imageData, message) {
    let imgData = imageData.data;
    let msg = message + '\0'; // null terminator
    let msgLen = msg.length;
    let msgIndex = 0;

    for (let i = 0; i < imgData.length; i += 8) {
      if (msgIndex < msgLen) {
        let charCode = msg.charCodeAt(msgIndex);
        for (let bit = 0; bit < 8; bit++) {
          imgData[i + bit] = (imgData[i + bit] & 0xFE) | ((charCode >> (7 - bit)) & 1);
        }
        msgIndex++;
      } else {
        break;
      }
    }

    return imageData;
  }

  const handleEmbed = () => {
    if (!image || !message) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = canvasRef.current;
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let newImageData = hideMessageInImage(imageData, message);
        ctx.putImageData(newImageData, 0, 0);

        const resultUrl = canvas.toDataURL();
        setOutput(resultUrl);
        alert('Message embedded successfully!');
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(image);
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
      <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 inline-block mb-4">
  Choose Image
  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
</label>

{imagePreview && (
  <div className="mb-4">
    <p className="text-sm text-gray-700 mb-1">Image Preview:</p>
    <img src={imagePreview} alt="Selected Preview" className="max-w-full h-auto rounded shadow" />
  </div>
)}

      <textarea
        className="w-full p-3 rounded border mb-4"
        rows="4"
        placeholder="Enter your secret message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={handleEmbed}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Embed Message
      </button>

      <canvas ref={canvasRef} style={{ display: 'none' }} />

     {output && (
  <div className="mt-6 text-center">
    <p className="text-sm text-gray-600 mb-2">Embedded Image:</p>
    <img src={output} alt="Embedded Result" className="max-w-full rounded mb-4" />

    <a
      href={output}
      download="stego-image.png"
      className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
    >
      Download Image
    </a>
  </div>
)}

    </div>
  );
}

export default EmbedForm;
