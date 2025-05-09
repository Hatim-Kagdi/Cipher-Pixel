import { useState, useRef } from 'react';

function ExtractForm() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState('');
  const canvasRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setMessage('');
    }
  };

  const handleExtract = () => {
    if (!image) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = canvasRef.current;
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const extracted = extractMessageFromImage(imageData);
        setMessage(extracted);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(image);
  };

  const handleClearAll = () => {
    setImage(null);
    setImagePreview(null);
    setMessage('');
  };

  function extractMessageFromImage(imageData) {
    let imgData = imageData.data;
    let extractedMessage = '';
    let charCode = 0;

    for (let i = 0; i < imgData.length; i += 8) {
      charCode = ((imgData[i] & 0x01) << 7) |
                 ((imgData[i + 1] & 0x01) << 6) |
                 ((imgData[i + 2] & 0x01) << 5) |
                 ((imgData[i + 3] & 0x01) << 4) |
                 ((imgData[i + 4] & 0x01) << 3) |
                 ((imgData[i + 5] & 0x01) << 2) |
                 ((imgData[i + 6] & 0x01) << 1) |
                 (imgData[i + 7] & 0x01);

      if (charCode === 0) break;

      extractedMessage += String.fromCharCode(charCode);
    }

    return extractedMessage;
  }

  return (
    <div className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 inline-block">
          Choose Image
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </label>
      </div>

      {imagePreview && (
        <div className="mb-4">
          <p className="text-sm text-gray-700 mb-1">Selected Image:</p>
          <img src={imagePreview} alt="Selected Preview" className="max-w-full h-auto rounded shadow" />
        </div>
      )}

      <div className="mb-4">
        <button
          onClick={handleExtract}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
        >
          Extract Message
        </button>
      </div>

      <div className="mb-4">
        <button
          onClick={handleClearAll}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full sm:w-auto"
        >
          Clear All
        </button>
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {message && (
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-700 font-medium">Decoded Message:</p>
          <p className="text-blue-700 mt-2 break-words">{message}</p>
        </div>
      )}
    </div>
  );
}

export default ExtractForm;
