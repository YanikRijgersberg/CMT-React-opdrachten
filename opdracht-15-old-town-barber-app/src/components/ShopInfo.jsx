import { data, services } from "../data";

const ShopInfo = () => {
  return (
    <section>
      <h2>{data.name}</h2>

      <h3>Openingstijden</h3>
      <ul>
        {Object.entries(data.openingHours).map(([day, hours]) => (
          <li key={day}>
            <strong>{day}:</strong> {hours}
          </li>
        ))}
      </ul>

      <h3>Services</h3>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <strong>{service.name}</strong> – €{service.price} ({service.duration} min)
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShopInfo;
