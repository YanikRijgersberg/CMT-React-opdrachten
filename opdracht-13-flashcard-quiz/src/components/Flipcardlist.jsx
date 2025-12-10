import Flipcard from "./Flipcards";

export default function FlashCardList({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        <Flipcard
          key={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
