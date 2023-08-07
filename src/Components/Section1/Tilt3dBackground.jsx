import { useState } from "react";
import "./Tilt3dBackground.css";

export const Tilt3dBackground = () => {
  const url = "https://bgwgroup.com.au/video/bgw-group-corporate-video-2023.mp4";
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-3d-container">
      <div className="image-box">
        {isLoading && 
        <div className="corp-video-loader-ctn">
          <div className="corp-video-loader"></div>
          <div className="corp-video-textloader">Loading...</div>
        </div>}
        <video
          controls
          autoPlay
          muted
          loop
          onLoadedData={handleLoadedData}
          style={{ display: isLoading ? "none" : "block" }}
        >
          <source src={url} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};