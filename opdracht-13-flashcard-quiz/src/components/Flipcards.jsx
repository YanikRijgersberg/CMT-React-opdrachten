import { useState } from 'react';

const Flipcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(true);

  const handflip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      onClick={handflip}
      className="w-64 h-40 bg-white shadow-md rounded-xl p-4 flex items-center justify-center text-center cursor-pointer text-lg font-semibold transition hover:scale-105"
    >
      {flipped ? question : answer}
    </div>
  );
}

export default Flipcard;
