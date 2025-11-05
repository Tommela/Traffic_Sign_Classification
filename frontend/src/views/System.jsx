// import { useState } from 'react'
// import VideoFeed from '../components/VideoFeed';
// import ImageClassification from '../components/ImageClassification';

// const System = () => {

//   const [view, setView] = useState("video");

//   const handleVideoClick = () => {
//     setView("video");
//   };

//   const handleImageClassifyClick = () => {
//     setView("imageClassify");
//   };

//   return (
//     <>
//     <div className="  px-12 lg:px-32 pt-5 mb-5">
//       <h1 className=" text-2xl text-center font-bold">
//         Real-time traffic sign classification and recognition system using CNN
//       </h1>
//       <div className=" text-sm font-medium text-center text-gray-500 rounded-lg grid grid-cols-5 gap-5 py-5">
//         <div className=" col-span-2">
//           <button
//             className=" w-full p-4 text-gray-900 bg-gray-100 border border-gray-200 dark:border-gray-700 rounded-lg focus:shadow-lg focus:shadow-gray-900 focus:bg-black focus:text-white focus:border-black active focus:outline-none dark:bg-gray-700 dark:text-white"
//             onClick={handleVideoClick}
//           >
//             Classify in real-time
//           </button>
//         </div>
//         <div className=" col-span-2">
//           <button
//             className=" w-full p-4 text-gray-900 bg-gray-100 border border-gray-200 dark:border-gray-700 rounded-lg focus:shadow-lg focus:shadow-gray-900 focus:bg-black focus:text-white focus:border-black active focus:outline-none dark:bg-gray-700 dark:text-white"
//             onClick={handleImageClassifyClick}
//           >
//             Classify with image
//           </button>
//         </div>
//         <div className=" col-span-1">
//           <button className=" w-full p-4 text-gray-900 bg-gray-100 border border-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300">
//             {" "}
//             CLOSE{" "}
//           </button>
//         </div>
//       </div>

//       {view === "video" && <VideoFeed />}
//       {view === "imageClassify" && <ImageClassification />}
//     </div>
//     </>
//   )
// }

// export default System
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSun, FaMoon, FaVideo, FaImage, FaTimes, FaBars } from "react-icons/fa"; // Added FaBars for menu icon
import VideoFeed from "../components/VideoFeed";
import ImageClassification from "../components/ImageClassification";

const System = () => {
  const [view, setView] = useState("video");
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();

  const handleVideoClick = () => {
    setView("video");
    setIsMenuOpen(false); // Close menu after clicking a button
  };

  const handleImageClassifyClick = () => {
    setView("imageClassify");
    setIsMenuOpen(false); // Close menu after clicking a button
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleClose = () => {
    navigate("/"); // Navigate to the main page
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-[#00002B] text-[#F2F2F2]" : "bg-[#F2F2F2] text-[#00002B]"
      }`}
    >
      <div className="flex">
        {/* Left Side: Navigation Buttons (Hidden on Mobile) */}
        <div className="hidden md:block bg-white min-h-screen w-1/6 p-4">
          <div className="flex flex-col space-y-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                theme === "dark"
                  ? "bg-[#1E1E59] text-[#FF1377]"
                  : "bg-[#F2F2F2] text-[#00002B]"
              } hover:bg-[#FF1377] hover:text-white transition-colors duration-300`}
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Real-time Classification Button */}
            <button
              onClick={handleVideoClick}
              className={`p-2 rounded-lg ${
                theme === "dark"
                  ? "bg-[#1E1E59] text-[#F2F2F2]"
                  : "bg-[#F2F2F2] text-[#00002B]"
              } hover:bg-[#FF1377] hover:text-white transition-colors duration-300`}
            >
              <FaVideo size={20} />
            </button>

            {/* Image Classification Button */}
            <button
              onClick={handleImageClassifyClick}
              className={`p-2 rounded-lg ${
                theme === "dark"
                  ? "bg-[#1E1E59] text-[#F2F2F2]"
                  : "bg-[#F2F2F2] text-[#00002B]"
              } hover:bg-[#FF1377] hover:text-white transition-colors duration-300`}
            >
              <FaImage size={20} />
            </button>

            {/* Close System Button */}
            <button
              onClick={handleClose}
              className={`p-2 rounded-lg ${
                theme === "dark"
                  ? "bg-[#1E1E59] text-[#F2F2F2]"
                  : "bg-[#F2F2F2] text-[#00002B]"
              } hover:bg-[#FF1377] hover:text-white transition-colors duration-300`}
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>

        {/* Right Side: Main Content */}
        <div className="w-full md:w-5/6 p-4">
          {/* Mobile Menu Bar (Visible on Mobile) */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
              className={`p-2 rounded-lg ${
                theme === "dark"
                  ? "bg-[#1E1E59] text-[#FF1377]"
                  : "bg-[#F2F2F2] text-[#00002B]"
              } hover:bg-[#FF1377] hover:text-white transition-colors duration-300`}
            >
              <FaBars size={20} /> {/* Hamburger icon */}
            </button>

            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                theme === "dark"
                  ? "bg-[#1E1E59] text-[#FF1377]"
                  : "bg-[#F2F2F2] text-[#00002B]"
              } hover:bg-[#FF1377] hover:text-white transition-colors duration-300`}
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div
              className={`md:hidden mb-4 ${
                theme === "dark" ? "bg-[#1E1E59]" : "bg-[#F2F2F2]"
              } rounded-lg shadow-lg`}
            >
              <button
                onClick={handleVideoClick}
                className={`w-full p-2 text-left ${
                  theme === "dark"
                    ? "text-[#F2F2F2] hover:bg-[#FF1377]"
                    : "text-[#00002B] hover:bg-[#FF1377] hover:text-white"
                }`}
              >
                <FaVideo className="inline-block mr-2" size={20} />
                Real-time Classification
              </button>
              <button
                onClick={handleImageClassifyClick}
                className={`w-full p-2 text-left ${
                  theme === "dark"
                    ? "text-[#F2F2F2] hover:bg-[#FF1377]"
                    : "text-[#00002B] hover:bg-[#FF1377] hover:text-white"
                }`}
              >
                <FaImage className="inline-block mr-2" size={20} />
                Image Classification
              </button>
              <button
                onClick={handleClose}
                className={`w-full p-2 text-left ${
                  theme === "dark"
                    ? "text-[#F2F2F2] hover:bg-[#FF1377]"
                    : "text-[#00002B] hover:bg-[#FF1377] hover:text-white"
                }`}
              >
                <FaTimes className="inline-block mr-2" size={20} />
                Close System
              </button>
            </div>
          )}

          {/* Main Content */}
          {view === "video" && <VideoFeed theme={theme} />}
          {view === "imageClassify" && <ImageClassification theme={theme} />}
        </div>
      </div>
    </div>
  );
};

export default System;