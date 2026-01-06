import { useEffect, useState } from "react";
import { getUserProfile, setUserProfile } from "../utils/localStorage";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const storedProfile = getUserProfile();
    if (storedProfile) {
      setProfile(storedProfile);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      alert("Alle velden zijn verplicht");
      return;
    }

    if (!email.includes("@")) {
      alert("Ongeldig emailadres");
      return;
    }

    if (!/^\d{10,}$/.test(phone)) {
      alert("Telefoonnummer is ongeldig");
      return;
    }

    setUserProfile(formData);
    setProfile(formData);
  };

  if (profile) {
    return <p>Welkom terug, {profile.name}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Profiel instellen</h2>

      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <input name="phone" value={formData.phone} onChange={handleChange} />

      <button type="submit">Opslaan</button>
    </form>
  );
};

export default UserProfile;
