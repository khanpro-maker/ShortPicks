import React from 'react';

const BackgroundVideo = ({ children }) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/path/to/background.mp4" 
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Optional overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
};

export default BackgroundVideo;