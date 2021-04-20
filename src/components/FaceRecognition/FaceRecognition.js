import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        {box.map((boxes) => {
          return (
            <div
              className="bounding-box"
              key={boxes.topRow}
              style={{
                top: boxes.topRow,
                right: boxes.rightCol,
                bottom: boxes.bottomRow,
                left: boxes.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
