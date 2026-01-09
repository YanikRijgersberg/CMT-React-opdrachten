import { useEffect, useState } from "react";
import { getUserProfile } from "../utils/localStorage";
import { services, timeSlots } from "../data";

const APPOINTMENTS_KEY = "appointments";

const BookingForm = () => {
  const user = getUserProfile();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name,
        email: user.email,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { service, date, time } = formData;

    if (!service || !date || !time) {
      alert("vull alle velden in");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (new Date(date) < today) {
      alert("kies een date in de toekomst");
      return;
    }

    try {
      const stored = localStorage.getItem(APPOINTMENTS_KEY);
      const appointments = stored ? JSON.parse(stored) : [];

      appointments.push({
        id: Date.now(),
        ...formData,
      });

      localStorage.setItem(
        APPOINTMENTS_KEY,
        JSON.stringify(appointments)
      );

      alert("Afspraak succesvol geboekt");
    } catch (error) {
      console.error("Fout bij opslaan afspraak:", error);
      alert("Er ging iets mis bij het opslaan");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Afspraak boeken</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        disabled
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        disabled
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
      >
        <option value="">Kies service</option>
        {services.map((service) => (
          <option key={service.id} value={service.name}>
            {service.name} (€{service.price})
          </option>
        ))}
      </select>

      <input
        type="date"
        name="date"
        min={new Date().toISOString().split("T")[0]}
        value={formData.date}
        onChange={handleChange}
      />

      <select
        name="time"
        value={formData.time}
        onChange={handleChange}
      >
        <option value="">Kies tijd</option>
        {timeSlots.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <button type="submit">Boek afspraak</button>
    </form>
  );
};

export default BookingForm;
