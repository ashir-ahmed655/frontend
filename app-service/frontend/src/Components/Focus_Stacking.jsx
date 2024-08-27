import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonAppBar from './Navbar';
import Before from '../Assets/Before.jpg';
import After from '../Assets/After.jpg';
import Footer from '../Components/Footer';

const ImageComparison = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="relative w-full max-w-lg mx-auto p-4">
      <div
        className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={Before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={After}
          alt="After"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${isHovering ? 'translate-x-1/2' : ''}`}
        />
        <div
          className={`absolute top-0 left-1/2 h-full w-1 bg-yellow-500 transition-transform duration-500 ${isHovering ? 'transform translate-x-1/2' : ''}`}
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold text-white">Before and After Comparison</h2>
        <p className="text-yellow-600 mt-2 mb-8">Hover over the image to compare before and after states.</p>
      </div>
    </div>
  );
};

const ImageSharpenerTool = () => {
  // Ensure the page loads from the top
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  return (
    <div className="min-h-screen bg-black-800 text-white p-4 flex flex-col">
      <ButtonAppBar />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl text-center md:text-left">
          <ImageComparison />
          <div className="mt-8 md:mt-0 md:ml-8 flex flex-col justify-left items-left md:items-start">
            <h1 className="text-3xl font-bold mb-4">Online Image Focus Stacking Tool</h1>
            <p className="text-gray-300 max-w-lg text-left">
              Our online image focus stacking tool lets you effortlessly combine multiple photos with different focal points into a single, sharp image.
              Upload your images, and our tool will align and merge them, enhancing depth and detail in your final result.
              Ideal for photography enthusiasts and professionals looking to achieve stunning, clear-focus compositions with ease.
            </p>
            <Link to='/ImageUploader'>
              <button className="bg-yellow-500 hover:bg-yellow-300 transition-all ease-in-out text-black font-bold py-2 px-4 rounded mt-8">
                Upload Image
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* How to Sharpen an Image Section */}
      <div className="bg-black-600 text-white py-16 px-4 w-full max-w-7xl text-center mt-16">
        <h2 className="text-3xl font-bold mb-12">How to Focus Stack an Image?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-yellow-600">
            <div className="bg-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">01</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Image Selection</h3>
            <p>Select the image you want to use for focus stacking.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-yellow-600">
            <div className="bg-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">02</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Image</h3>
            <p>Click the "Upload Image" button and select the image you want to focus stack from your computer or device.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-yellow-600">
            <div className="bg-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">03</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Preview the Image</h3>
            <p>Preview the images you've selected.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-yellow-600">
            <div className="bg-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">04</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Processing of Images</h3>
            <p>Wait while our AI model processes your images.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-yellow-600">
            <div className="bg-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">05</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Download the Image</h3>
            <p>Click the "Download" button to save the Focused Image to your device.</p>
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="bg-black-600 text-center py-16 mt-8 w-full">
        <h1 className="text-white text-4xl font-bold mb-4">
          See the Difference: Free Image Sharpening at Your Fingertips!
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          Experience the magic of sharpening images online, absolutely free, with Focal AI! If you seek a swift and hassle-free way to enhance image sharpness without any cost, your search ends here.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
          <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center w-full md:w-1/3">
            <div className="text-white text-4xl mb-4">⚡</div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Pioneering Influence
            </h2>
            <p className="text-gray-400 text-center">
              Using advanced algorithms to enhance image clarity.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center w-full md:w-1/3">
            <div className="text-white text-4xl mb-4">🔍</div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Composite Images
            </h2>
            <p className="text-gray-400 text-center">
              Enhance the quality of data by combining multiple images through AI techniques.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center w-full md:w-1/3">
            <div className="text-white text-4xl mb-4">⚙️</div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Focal Clarity
            </h2>
            <p className="text-gray-400 text-center">
              Revitalize your images with a Focal AI free online images focus tool. Say goodbye to blurriness and embrace the world of clear, crisp visuals.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ImageSharpenerTool;
