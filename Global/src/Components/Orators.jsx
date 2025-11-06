import React from "react";
import "./Orators.css";

const Orators = () => {
  const orators = [
    {
      name: "Prof. Mohamed Hosni",
      title: "CEO & Prof.",
      country: "United Kingdom",
      img: "../../Images/Mohamed.911e34c26a8168d7d2e6 (1).jpg",
    },
    {
      name: "Prof. Chrysoula I. Liakou",
      title: "CEO & Prof.",
      country: "Greece",
      img: "../../Images/chrysoula.872cd623771a8263d69d.png",
    },
    {
      name: "Prof. Joaquin Cayon",
      title: "CEO & Prof.",
      country: "Spain",
      img: "../../Images/Joaquin.9230a5565d4d0c709f83.jpg",
    },
    {
      name: "Prof. Mohammed Abu-Ragheef",
      title: "CEO & Prof.",
      country: "Sweden",
      img: "../../Images/Mohammed.913e01f3ba94e2457a47.jpg",
    },
  ];

  return (
    <div className="orators-section">
      {/* Hero Section */}
      <div className="orators-hero">
        <h2>Mediclave – Orators</h2>
      </div>

      {/* Heading */}
      <div className="orators-header">
        <h2>Meet Our Distinguished Orators</h2>
        <p>
          Renowned experts from across the globe sharing insights and leading
          the conversation at Mediclave.
        </p>
      </div>

      {/* Orators Grid */}
      <div className="orators-grid">
        {orators.map((o, index) => (
          <div key={index} className="orator-card">
            <img src={o.img} alt={o.name} className="orator-img" />
            <h4>{o.name}</h4>
            <p className="orator-title">{o.title}</p>
            <p className="orator-country">{o.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orators;
