import React from 'react'
import BackgroundImage from "../images/Background_2Focus.jpg";
import ForedgroundImage from "../images/Foreground_2Focus.jpg";
import FocussedImage from "../images/After-new2.jpg";

const InnerSection2 = () => {
  const backgroundButtonClick2 = () => {
    console.log("Background Button Clicked");
    const new_src = BackgroundImage;
    document.getElementById("three-image2").src = new_src;
  };
  const foregroundButtonClick2 = () => {
    console.log("Foreground Button Clicked");
    const new_src = ForedgroundImage;
    document.getElementById("three-image2").src = new_src;
  };
  const focusstackingbuttonclick2 = () => {
    console.log("Focus Stacking Button Clicked");
    const new_src = FocussedImage;
    document.getElementById("three-image2").src = new_src;
  }

  return (
    // <div className="flex flex-row gap-6 px-12 h-screen">
    //   {/* 65% width Image - now on the left */}
    //   <div className="w-2/3">
    //     <img id="three-image2" src={BackgroundImage} alt="Dynamic Focus" className="w-full h-auto" />
    //     {/* Button Container div */}
    //     <div className="flex justify-center p-4 space-x-4">
    //       <button onClick={backgroundButtonClick2} className="rounded-full border border-black text-black bg-transparent py-2 px-8 transition duration-500 hover:bg-white hover:bg-opacity-25 hover:border-opacity-50">
    //         Background
    //       </button>
    //       <button onClick={foregroundButtonClick2} className="rounded-full border border-black text-black bg-transparent py-2 px-8 transition duration-500 hover:bg-white hover:bg-opacity-25 hover:border-opacity-50">
    //         Foreground
    //       </button>
    //       <button onClick={focusstackingbuttonclick2} className="rounded-full border border-black text-black bg-transparent py-2 px-8 transition duration-500 hover:bg-white hover:bg-opacity-25 hover:border-opacity-50">
    //         Focus Stacking
    //       </button>
    //     </div>
    //   </div>
    <div className="flex flex-row gap-6 px-12">
  {/* 65% width Image - now on the left */}
  <div className="w-2/3">
    <img id="three-image2" src={BackgroundImage} alt="Dynamic Focus" className="w-full h-auto" />
    {/* Button Container div */}
    <div className="flex justify-center p-4 space-x-4">
      <button onClick={backgroundButtonClick2} className="rounded-full border mb-35 border-black text-black bg-transparent py-2 px-8 transition duration-500 hover:bg-white hover:bg-opacity-100 hover:border-opacity-100 rounded-full  mb-35 border-2 border-black text-black bg-white py-2 px-8 transition duration-500 hover:bg-yellow-600 hover:bg-opacity-100 hover:border-opacity-100">
      
        Background
      </button>
      <button onClick={foregroundButtonClick2} className="rounded-full border mb-35 border-black text-black bg-transparent py-2 px-8 transition duration-500 hover:bg-white hover:bg-opacity-100 hover:border-opacity-100 rounded-full  mb-35 border-2 border-black text-black bg-white py-2 px-8 transition duration-500 hover:bg-yellow-600 hover:bg-opacity-100 hover:border-opacity-100">
      
        Foreground
      </button>
      <button onClick={focusstackingbuttonclick2} className="rounded-full border mb-35 border-black text-black bg-transparent py-2 px-8 transition duration-500 hover:bg-white hover:bg-opacity-100 hover:border-opacity-100 rounded-full  mb-35 border-2 border-black text-black bg-white py-2 px-8 transition duration-500 hover:bg-yellow-600 hover:bg-opacity-100 hover:border-opacity-100">
    
        Focus Stacking
      </button>
    </div>
  </div>
{/* </div> */}


      {/* 35% width Textbox - now on the right */}
      <div className="w-2/3 p-2">
      <div className="text-4xl font-bold text-left text-#fff-800 py-8">
        Perfect Clarity with Image Stacker Technology
        </div>
        <p className="text-xl text-left">
        When you want a crisp landscape you have to use photo stacking software. It combines photos taken at different focal lengths and delivers a razor-sharp image with the foreground, background, and everything in between in focus.</p>
        <p className="text-xl text-left mt-6">
        The AI algorithm inside Focus Stacking chooses the crispest parts of all photos and corrects lens and chromatic aberration in raw files. </p>
      </div>
      </div>
    
  );
}

export default InnerSection2;
