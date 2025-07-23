import React from "react";
export default function Avatar3D() {
  return (
    <div className="avatar">
      <model-viewer
        src="/ester.glb"
        alt="Ester 3D"
        auto-rotate
        camera-controls
        style={{ width: "100%", height: "500px" }}
      ></model-viewer>
    </div>
  );
}
