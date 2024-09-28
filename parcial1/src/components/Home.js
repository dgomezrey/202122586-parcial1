import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FaRunning, FaSwimmer, FaBiking } from 'react-icons/fa'; 
import data from '../data/data.json'; 

const Home = () => {
  const [user, setUser] = useState({});
  const [bestTimes, setBestTimes] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [modalImage, setModalImage] = useState("");

  const convertTimeToMinutes = (time) => {
    const [hours, minutes] = time.split(":");
    return parseInt(hours) * 60 + parseInt(minutes.replace("h", ""));
  };

  const calculateBestTimes = (sessions) => {
    const bestCycling = Math.min(...sessions.cycling.map((session) => convertTimeToMinutes(session.time)));
    const bestRunning = Math.min(...sessions.running.map((session) => convertTimeToMinutes(session.time)));
    const bestSwimming = Math.min(...sessions.swimming.map((session) => convertTimeToMinutes(session.time)));

    return {
      cycling: `${Math.floor(bestCycling / 60)}:${bestCycling % 60}h`,
      running: `${Math.floor(bestRunning / 60)}:${bestRunning % 60}h`,
      swimming: `${Math.floor(bestSwimming / 60)}:${bestSwimming % 60}h`
    };
  };

  useEffect(() => {
    setUser(data.user);
    setBestTimes(calculateBestTimes(data.user.sessions));
  }, []);

  const handleCardClick = (session, categoryImage) => {
    setSelectedSession(session);
    setModalImage(categoryImage);
    setShowModal(true);
  };

  const renderCards = (sessionData, imageUrl) => {
    return (
      <Row>
        <Col xs={12} md={6}>
          {sessionData.slice(0, 5).map((session, index) => (
            <Card className="mb-3 text-white" key={index} style={{ minHeight: '140px' }} onClick={() => handleCardClick(session, imageUrl)}>
              <Card.Img 
                src={imageUrl} 
                alt={session.title} 
                style={{ height: '140px', objectFit: 'cover' }} 
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <Card.Title>{session.title}</Card.Title>
                <Card.Text>{session.description}</Card.Text>
                <Card.Text>{session.distance} - {session.time}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          ))}
        </Col>
        <Col xs={12} md={6}>
          {sessionData.slice(5, 10).map((session, index) => (
            <Card className="mb-3 text-white" key={index} style={{ minHeight: '140px' }} onClick={() => handleCardClick(session, imageUrl)}>
              <Card.Img 
                src={imageUrl} 
                alt={session.title} 
                style={{ height: '140px', objectFit: 'cover' }} 
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <Card.Title>{session.title}</Card.Title>
                <Card.Text>{session.description}</Card.Text>
                <Card.Text>{session.distance} - {session.time}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          ))}
        </Col>
      </Row>
    );
  };

  return (
    <Container fluid className="d-flex flex-column justify-content-between" style={{ height: '100vh', padding: '1rem' }}>
      <div className="flex-grow-1">
        <Row className="mb-4">
          <Col>
            <h3 className="text-center">Cycling</h3>
            {renderCards(user.sessions?.cycling || [], user.images?.cycling)}
          </Col>
          <Col>
            <h3 className="text-center">Running</h3>
            {renderCards(user.sessions?.running || [], user.images?.running)}
          </Col>
          <Col>
            <h3 className="text-center">Swimming</h3>
            {renderCards(user.sessions?.swimming || [], user.images?.swimming)}
          </Col>
        </Row>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        {selectedSession && (
          <>
            <Modal.Body className="p-0">
              <Card className="text-white">
                <Card.Img 
                  src={modalImage}
                  alt={selectedSession.title} 
                  style={{ height: 'auto', width: '100%' }}
                />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  <Card.Title>{selectedSession.title}</Card.Title>
                  <Card.Text>{selectedSession.description}</Card.Text>
                  <Card.Text>{selectedSession.distance} - {selectedSession.time}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setShowModal(false)} style={{ backgroundColor: '#007bff' }}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <footer className="bg-teal text-white py-3 mt-auto" style={{ backgroundColor: '#006d77', color: '#fff' }}>
        <Row className="justify-content-center align-items-center">
          <Col xs="auto" className="text-center">
            <img
              src="https://randomuser.me/api/portraits/lego/2.jpg"
              alt={user.name}
              className="rounded-circle me-2"
              width="50"
              height="50"
            />
          </Col>
          <Col xs="auto" className="text-center">
            <strong className="d-block" style={{ fontSize: '1.2rem' }}>{user.name}</strong>
          </Col>
          <Col xs="auto" className="text-center">
            <FaRunning size={30} className="me-2" />
            <strong style={{ fontSize: '1.2rem' }}>{bestTimes?.running}</strong>
          </Col>
          <Col xs="auto" className="text-center">
            <FaSwimmer size={30} className="me-2" />
            <strong style={{ fontSize: '1.2rem' }}>{bestTimes?.swimming}</strong>
          </Col>
          <Col xs="auto" className="text-center">
            <FaBiking size={30} className="me-2" />
            <strong style={{ fontSize: '1.2rem' }}>{bestTimes?.cycling}</strong>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default Home;
