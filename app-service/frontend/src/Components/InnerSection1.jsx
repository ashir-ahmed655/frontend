import React from "react";
import BackgroundImage from "../images/Focus3.jpg";
import ForedgroundImage from "../images/Focus2.jpg";
import FocussedImage from "../images/Focus.jpg";
const InnerSection1 = () => {

    const backgroundButtonClick = () => {
        console.log("Background Button Clicked");
        const new_src = BackgroundImage;
        document.getElementById("three-image").src = new_src;
      };
      const foregroundButtonClick = () => {
        console.log("Foreground Button Clicked");
       const  new_src = ForedgroundImage;
        document.getElementById("three-image").src = new_src;
        
      };
      const focusstackingbuttonclick = () => {
        console.log("Focus Stacking Button Clicked");
        const new_src = FocussedImage;
        document.getElementById("three-image").src = new_src;
        }
    
      return (
        <div className="flex flex-row gap-6 px-12 h-screen">
          {/* 35% width Textbox */}
          <div className="w-1/2 p-2">
            <div className="text-4xl font-bold text-left text-#fff-800 py-8">
              Master Macro Photography with Advanced Focus Stacking Software
            </div>
            <p className="text-xl text-left  ">
              Capturing the intricate details of small objects with a macro lens can
              be a challenge, as it{`'`}s impossible to focus on the entire subject
              in a single shot. This often requires dozens of photos, each focusing
              on different parts to ensure every tiny detail is sharp.
            </p>
            <p className="text-xl text-left mt-6">
              Recognizing this, we{`'`}ve developed what many consider the best
              focus stacking software available: our platform seamlessly integrates
              up to 100 images, automatically blending various depths of field for a
              perfectly sharp final image. Whether you{`'`}re working on Mac or
              Windows, our software makes it easier than ever to achieve
              professional macro stacking results.
            </p>
    
            {/* <div className="text-2xl"> */}
          </div>
          {/* 65% width Image */}
          <div className="w-2/3">
            <div className="">
              <img id="three-image" src={BackgroundImage} alt="Image" />
              {/* Button Container div */}
              <div  className="flex justify-center p-4 space-x-4  ">
                <button onClick={backgroundButtonClick} className="rounded-full  mb-35 border-2 border-black text-black bg-white py-2 px-8 transition duration-500 hover:bg-yellow-600 hover:bg-opacity-100 hover:border-opacity-100">
                  Background
                </button>
                <button onClick={foregroundButtonClick} className="rounded-full border mb-35 border-black text-black bg-transparent py-2 px-8 transition duration-500 hover:bg-white hover:bg-opacity-100 hover:border-opacity-100 rounded-full  mb-35 border-2 border-black text-black bg-white py-2 px-8 transition duration-500 hover:bg-yellow-600 hover:bg-opacity-100 hover:border-opacity-100">
                  Foreground
                </button>
                <button onClick={focusstackingbuttonclick} className="rounded-full border mb-35 border-black text-black bg-transparent py-2 px-8 transition duration-500 hover:bg-white hover:bg-opacity-100 hover:border-opacity-100 rounded-full  mb-35 border-2 border-black text-black bg-white py-2 px-8 transition duration-500 hover:bg-yellow-600 hover:bg-opacity-100 hover:border-opacity-100">
      
                  Focus Stacking
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default InnerSection1;
    