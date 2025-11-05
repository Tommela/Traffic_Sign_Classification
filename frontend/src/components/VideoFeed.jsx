// export default VideoFeed
import axios from "axios";
import React, { useEffect, useState } from "react";

const VideoFeed = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoSource, setVideoSource] = useState("");

  const startVideo = () => {
    setIsOpen(true);
    setVideoSource(
      `http://127.0.0.1:5000/video_feed?timestamp=${new Date().getTime()}`
    );
  };

  const stopVideo = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/stop_feed");
      setIsOpen(false);
      setVideoSource("");
    } catch (error) {
      console.error("Error stopping video feed", error);
    }
  };

  useEffect(() => {
    // Clean up video feed when the component unmounts
    return () => {
      if (isOpen) {
        stopVideo();
      }
    };
  }, [isOpen]);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-[#00002B]" : "bg-[#F2F2F2]"
      } p-6 text-justify flex flex-col justify-center items-center md:px-14`}
    >
      <h1 className="text-4xl py-10 text-center uppercase karla-title text-[#FF1377]">
        Video Classification
      </h1>

      {/* Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={startVideo}
          className={`px-6 py-2 rounded-lg ${
            theme === "dark"
              ? "bg-[#FF1377] text-white"
              : "bg-[#00002B] text-white"
          } hover:bg-[#FF1377] hover:text-white transition-colors duration-300`}
        >
          Start
        </button>
        <button
          onClick={stopVideo}
          className={`px-6 py-2 rounded-lg ${
            theme === "dark"
              ? "bg-[#FF1377] text-white"
              : "bg-[#00002B] text-white"
          } hover:bg-[#FF1377] hover:text-white transition-colors duration-300`}
        >
          Stop
        </button>
      </div>

      {/* Video Feed */}
      {isOpen && (
        <div className="w-full max-w-4xl">
          <img
            src={videoSource}
            alt="Video Feed"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default VideoFeed;