import React from 'react';
import Isbah from '../Assets/Isbah.jpg';
import Hafsa1 from '../Assets/Hafsa1.jpg';
import Ashir from '../Assets/Ashir.jpg'
import Hassan from '../Assets/Hassan.jpg'

const OurTeam = () => {
  return (
    <div>
      {/* Our Team Section */}
      <div className="relative overflow-hidden py-16">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-blue-600 to-yellow-600 opacity-40 rounded-full"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-white text-5xl font-bold mb-12">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* Team Member 1 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-32 h-32 rounded-full mb-4 border-4 border-purple-600"
                src={Ashir}
                alt="Team Member 1"
              />
              <h3 className="text-white text-2xl font-semibold mb-2">M.Ashir Siddique</h3>
              <p className="text-purple-400 text-lg font-medium">Lead Developer</p>
              <p className="text-gray-400 text-center mt-4">
                "Training the Stacking Model and Noise Removal Model for enhanced image processing, ensuring sharper and clearer results."
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-32 h-32 rounded-full mb-4 border-4 border-blue-600"
                src={Hassan}
                alt="Team Member 2"
              />
              <h3 className="text-white text-2xl font-semibold mb-2">Hassan Ahmed Khan</h3>
              <p className="text-blue-400 text-lg font-medium">Stacking Model Training and Data Collection</p>
              <p className="text-gray-400 text-center mt-4">
                "Conducting Stacking Model Training and Data Collection to improve image clarity and accuracy, laying the foundation for advanced visual processing."
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-32 h-32 rounded-full mb-4 border-4 border-yellow-600"
                src={Hafsa1}
                alt="Team Member 3"
              />
              <h3 className="text-white text-2xl font-semibold mb-2">Hafsa Anwar</h3>
              <p className="text-green-400 text-lg font-medium">UI/UX Designer & Frontend</p>
              <p className="text-gray-400 text-center mt-4">
                "UI/UX Designer and Frontend Developer focused on crafting visually appealing and user-friendly websites. Combines design expertise with frontend coding skills to deliver engaging web experiences."
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-32 h-32 rounded-full mb-4 border-4 border-green-600"
                src={Isbah}
                alt="Team Member 4"
              />
              <h3 className="text-white text-2xl font-semibold mb-2">Isbah Khan</h3>
              <p className="text-red-400 text-lg font-medium">Backend Developer</p>
              <p className="text-gray-400 text-center mt-4">
                "Backend Developer and Graphic Designer crafting functional server-side solutions and striking visuals for a cohesive and engaging website."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
