// src/components/Message.jsx
const Message = ({ msg }) => {
  return (
    <p>
      <strong>{msg.name}:</strong> {msg.text}
    </p>
  );
};

export default Message;
