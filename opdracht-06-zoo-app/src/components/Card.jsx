const Card = ({ animals, onShowDetail }) => {
  return (
    <section className="piem">
      <img src={animals.imageUrl} alt={animals.name} />
      <h2>{animals.name}</h2>

      <button onClick={() => onShowDetail(animals.id)}>Meer info</button>
    </section>
  );
};

export default Card;
