import React, { useState, useEffect } from "react";

function InternetSpeed() {
  const [currentSpeed, setCurrentSpeed] = useState(null);
  useEffect(() => {
    navigator.connection.addEventListener("change", logNetworkInfo);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      logNetworkInfo();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function logNetworkInfo() {
    setCurrentSpeed(navigator.connection.downlink);
  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>{currentSpeed} Mbps </div>
      </div>
    </>
  );
}

export default InternetSpeed;
