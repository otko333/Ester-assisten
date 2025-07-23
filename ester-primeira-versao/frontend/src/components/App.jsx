import React, { useState } from "react";
import Avatar3D from "./Avatar3D";
import ChatBox from "./ChatBox";

export default function App() {
  return (
    <div className="app">
      <Avatar3D />
      <ChatBox />
    </div>
  );
}
