import React, { useState, useEffect } from "react";

// Clock component verplaatst naar binnen
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2>{currentTime.toLocaleTimeString()}</h2>;
};

const WelcomeMessage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let newMessage = "";

    if (hours < 12) {
      newMessage = "Goedemorgen!";
    } else if (hours < 18) {
      newMessage = "Goedemiddag!";
    } else {
      newMessage = "Goedenavond!";
    }

    setMessage(newMessage);
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <Clock />
    </div>
  );
};

export default WelcomeMessage;
