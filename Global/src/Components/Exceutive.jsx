import React from "react";
import bgImage from "../../Images/Exceutive.png"; // ✅ Import your image

const Exceutive = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          width: "80%",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          marginLeft: "140px",
          marginTop: "-20px",
        }}
        className="hero-section"
      >
        <h1 className="hero-title">Mediclave – Executive Panel Members</h1>
      </div>

      {/* Content Section */}
      <div style={{ padding: "20px", fontSize: "18px", textAlign: "center" }} className="content-section">
        <h3 className="section-title">Meet Our Esteemed Executive Panel</h3>
        <p style={{ color: "grey" }} className="section-description">
          Our executive panel comprises visionary leaders and industry pioneers
          who bring deep expertise and strategic insight to guide our mission in
          advancing global health innovation.
        </p>
        
        {/* Executive Images Grid */}
        <div className="executive-grid">
          <div className="executive-item">
            <img src="../../Images/Alireza.bf7b629dbecc85dcd35b.webp" alt="Alireza Heidari" className="executive-img" />
            <div className="executive-info">
              <h4>Alireza Heidari</h4>
              <p>CEO & Prof. USA</p>
            </div>
          </div>
          
          <div className="executive-item">
            <img src="../../Images/Hassan-El-Tamimi.e5a28071ccb252b74746 (1).webp" alt="Hassan El-Tamimi" className="executive-img" />
            <div className="executive-info">
              <h4>Hassan El-Tamimi</h4>
              <p>CEO & Prof. USA</p>
            </div>
          </div>
          
          <div className="executive-item">
            <img src="../../Images/Willie_Sai_Ho_Chan.eb79196219fa1331ddc7.webp" alt="Willie Sai Ho Chan" className="executive-img" />
            <div className="executive-info">
              <h4>Willie Sai Ho Chan</h4>
              <p>CEO & Prof. China</p>
            </div>
          </div>
          
          <div className="executive-item">
            <img src="../../Images/Mihail.8c0d7000c838068225e1.webp" alt="Mihail Lucian Birsa" className="executive-img" />
            <div className="executive-info">
              <h4>Mihail Lucian Birsa</h4>
              <p>CEO & Prof. Romania</p>
            </div>
          </div>
          
          <div className="executive-item">
            <img src="../../Images/LauraSarbu.ebad3786937e90cfd658.webp" alt="Laura Gabriela SARBU" className="executive-img" />
            <div className="executive-info">
              <h4>Laura Gabriela SARBU</h4>
              <p>CEO & Prof. Romania</p>
            </div>
          </div>
          
          <div className="executive-item">
            <img src="../../Images/Mohamed.911e34c26a8168d7d2e6 (1).jpg" alt="Mohamed Hosni" className="executive-img" />
            <div className="executive-info">
              <h4>Mohamed Hosni</h4>
              <p>CEO & Prof. United Kingdom</p>
            </div>
          </div>
          
          <div className="executive-item">
            <img src="../../Images/dana.3d0dc6ab96c3aa2f3391 (1).jpg" alt="Dana York" className="executive-img" />
            <div className="executive-info">
              <h4>Dana York</h4>
              <p>CEO & Prof. USA</p>
            </div>
          </div>
          
          <div className="executive-item">
            <img src="../../Images/Sobia.767371ea139849259186.webp" alt="Sobia Hasan" className="executive-img" />
            <div className="executive-info">
              <h4>Sobia Hasan</h4>
              <p>CEO & Prof. Pakistan</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        /* Default Styles */
        .hero-section {
          width: 80%;
          margin-left: 140px;
          margin-top: -20px;
          height: 50vh;
        }
        
        .hero-title {
          font-size: 2.5rem;
        }
        
        .section-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        
        .section-description {
          font-size: 1.1rem;
          max-width: 800px;
          margin: 0 auto 2rem;
        }
        
        .executive-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          padding: 2rem;
        }
        
        .executive-item {
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .executive-item:hover {
          transform: translateY(-5px);
        }
        
        .executive-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #f0f0f0;
          margin-bottom: 1rem;
        }
        
        .executive-info h4 {
          margin: 0.5rem 0;
          color: #333;
          font-size: 1.2rem;
        }
        
        .executive-info p {
          margin: 0;
          color: #666;
          font-size: 1rem;
        }

        /* Laptop (1024px and below) */
        @media (max-width: 1024px) {
          .hero-section {
            width: 90%;
            margin-left: 5%;
            height: 40vh;
          }
          
          .hero-title {
            font-size: 2.2rem;
          }
          
          .executive-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            padding: 1.5rem;
          }
          
          .executive-img {
            width: 180px;
            height: 180px;
          }
        }

        /* Tablet (768px and below) */
        @media (max-width: 768px) {
          .hero-section {
            width: 95%;
            margin-left: 2.5%;
            height: 35vh;
            margin-top: 0;
          }
          
          .hero-title {
            font-size: 1.8rem;
            text-align: center;
            padding: 0 1rem;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .section-description {
            font-size: 1rem;
            padding: 0 1rem;
          }
          
          .executive-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            padding: 1rem;
          }
          
          .executive-img {
            width: 160px;
            height: 160px;
          }
          
          .executive-info h4 {
            font-size: 1.1rem;
          }
          
          .executive-info p {
            font-size: 0.9rem;
          }
        }

        /* Phone (480px and below) */
        @media (max-width: 480px) {
          .hero-section {
            width: 100%;
            margin-left: 0;
            height: 30vh;
          }
          
          .hero-title {
            font-size: 1.5rem;
            padding: 0 0.5rem;
          }
          
          .section-title {
            font-size: 1.3rem;
          }
          
          .section-description {
            font-size: 0.9rem;
            padding: 0 0.5rem;
          }
          
          .executive-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 0.5rem;
          }
          
          .executive-img {
            width: 140px;
            height: 140px;
          }
          
          .executive-info h4 {
            font-size: 1rem;
          }
          
          .executive-info p {
            font-size: 0.85rem;
          }
          
          .content-section {
            padding: 10px;
          }
        }

        /* Small Phone (320px and below) */
        @media (max-width: 320px) {
          .hero-title {
            font-size: 1.3rem;
          }
          
          .section-title {
            font-size: 1.1rem;
          }
          
          .executive-img {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default Exceutive;