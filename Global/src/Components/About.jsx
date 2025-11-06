import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div className="background-header">
        <div className="background-overlay">
          <h1 className="background-title">About Event</h1>
        </div>
      </div>

      <div className="container mt-4 about-page">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="conference-title">MEDICLAVE</h1>
          <h4 className="conference-date">25–27 Nov 2025 | Valencia, Spain</h4>
        </div>

        {/* Introduction */}
        <Card className="intro-card mb-5">
          <Card.Body>
            <p className="intro-text">
              Join us at the prestigious Global Medical Conclave – Mediclave 2025,
              where healthcare professionals, researchers, scientists, and
              policymakers unite to discuss groundbreaking developments, tackle
              pressing challenges, and shape the future of medical science. 
              Mediclave is more than just a conference – it's a dynamic platform 
              for innovation, research, and collaboration in healthcare, medical 
              technology, and patient care. With a focus on artificial intelligence, 
              personalized medicine, and global health challenges, this conclave 
              aims to foster partnerships and deliver impactful solutions.
            </p>
          </Card.Body>
        </Card>

        {/* Who Can Attend Section */}
        <div className="section mb-5">
          <h2 className="section-title">Who Can Attend...</h2>
          <Row>
            <Col md={6}>
              <Card className="attendee-card h-100">
                <Card.Body>
                  <ul className="attendee-list">
                    <li>Researchers & Academicians</li>
                    <li>Healthcare Providers & Clinicians</li>
                    <li>Medical Device Innovators</li>
                    <li>Government Officials & Policymakers</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="attendee-card h-100">
                <Card.Body>
                  <ul className="attendee-list">
                    <li>Pharmaceutical & Biotech Professionals</li>
                    <li>Students & Early-Career Professionals</li>
                    <li>NGOs & Public Health Organizations</li>
                    <li>Investors & Healthcare Entrepreneurs</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Event Highlights Section */}
        <div className="section mb-5">
          <h2 className="section-title">Event Highlights</h2>
          <Row>
            <Col md={6} lg={4} className="mb-3">
              <Card className="highlight-card h-100">
                <Card.Body>
                  <h5 className="highlight-title">Keynote Speakers</h5>
                  <p className="highlight-desc">Leading experts in medicine, policy, and tech.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-3">
              <Card className="highlight-card h-100">
                <Card.Body>
                  <h5 className="highlight-title">Exhibition</h5>
                  <p className="highlight-desc">Showcase of cutting-edge healthcare tech.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-3">
              <Card className="highlight-card h-100">
                <Card.Body>
                  <h5 className="highlight-title">Accredited Learning</h5>
                  <p className="highlight-desc">Earn CPD/CME credits by attending the conferences.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-3">
              <Card className="highlight-card h-100">
                <Card.Body>
                  <h5 className="highlight-title">Publication Opportunities</h5>
                  <p className="highlight-desc">Proceedings or journal partnerships for presented work.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-3">
              <Card className="highlight-card h-100">
                <Card.Body>
                  <h5 className="highlight-title">Workshops & Seminars</h5>
                  <p className="highlight-desc">Interactive sessions on current topics.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-3">
              <Card className="highlight-card h-100">
                <Card.Body>
                  <h5 className="highlight-title">Networking Opportunities</h5>
                  <p className="highlight-desc">Connect with global leaders.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-3">
              <Card className="highlight-card h-100">
                <Card.Body>
                  <h5 className="highlight-title">Collaboration Building</h5>
                  <p className="highlight-desc">Initiate joint research projects or multi-institutional studies.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-3">
              <Card className="highlight-card h-100">
                <Card.Body>
                  <h5 className="highlight-title">Awards & Recognition</h5>
                  <p className="highlight-desc">Compete for best paper/poster prizes and other accolades.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Important Dates Section */}
        <div className="section mb-5">
          <h2 className="section-title">Important Dates</h2>
          <Row>
            <Col md={4} className="mb-3">
              <Card className="date-card text-center h-100">
                <Card.Body>
                  <h5 className="date-title">Event Date</h5>
                  <div className="date-divider"></div>
                  <p className="date-info">25th November</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="date-card text-center h-100">
                <Card.Body>
                  <h5 className="date-title">Proposed Venue</h5>
                  <div className="date-divider"></div>
                  <p className="date-info">Novotel Valencia, Spain</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="date-card text-center h-100">
                <Card.Body>
                  <h5 className="date-title">Registration Deadline</h5>
                  <div className="date-divider"></div>
                  <p className="date-info">20th November</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;