// src/components/MessageList.jsx
import Message from "./Message";

const MessageList = ({ messages }) => {
  return (
    <div>
      <h2>Berichten</h2>

      {messages.map((msg) => (
        <Message key={msg.id} msg={msg} />
      ))}
    </div>
  );
};

export default MessageList;
