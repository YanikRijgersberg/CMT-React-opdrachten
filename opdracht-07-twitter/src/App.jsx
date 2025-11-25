import { useState } from "react";
import CreateMessage from "../src/componets/CreateMessage";
import MessageList from "../src/componets/MessageList";

const App = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <h1>Chatroom</h1>

      <CreateMessage 
        messages={messages} 
        setMessages={setMessages} 
      />

      <MessageList messages={messages} />
    </div>
  );
};

export default App;
