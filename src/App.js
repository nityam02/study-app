import React, { useState, useRef } from 'react';
import Header from "../src/components/Header"
import SideBar from "../src/components/SideBar"
import Canvas from "../src/components/Canvas"
import "./common.css"

function App() {
  const childRef = useRef();

  return (
    <>
      <Header />
      <div className="flex">
        <SideBar handleTick={(img) => childRef.current.addImage(img)} backgroundImg={(background) => childRef.current.onBackgroundImageDrop(background)} />
        <Canvas ref={childRef} />
      </div>
    </>
  );
}

export default App;
