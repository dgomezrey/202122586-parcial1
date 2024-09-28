import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Mock del servicio para obtener los datos del usuario y sus sesiones
const mockUserData = {
  name: "Camilo Escobar",
  profilePic: "https://via.placeholder.com/100", // Imagen de perfil mock
  bestTimes: {
    running: "1:05",
    swimming: "1:05",
    cycling: "1:05",
  }
};

const mockSessions = {
  cycling: Array(10).fill({
    title: "Cycling Session",
    description: "Recorrido alrededor de la bahía de Cartagena",
    distance: "40k",
    time: "2:10h",
    city: "Cartagena",
    imageUrl: "https://via.placeholder.com/300x200?text=Cycling+Session"
  }),
  running: Array(10).fill({
    title: "Running Session",
    description: "Recorrido alrededor de la bahía de Cartagena",
    distance: "10k",
    time: "1:05h",
    city: "Cartagena",
    imageUrl: "https://via.placeholder.com/300x200?text=Running+Session"
  }),
  swimming: Array(10).fill({
    title: "Swimming Session",
    description: "Recorrido alrededor de la bahía de Cartagena",
    distance: "5k",
    time: "1:00h",
    city: "Cartagena",
    imageUrl: "https://via.placeholder.com/300x200?text=Swimming+Session"
  })
};

const Home = () => {
  const [user, setUser] = useState({});
  const [sessions, setSessions] = useState({});

  useEffect(() => {
    // Simulación de llamada a la API mock para cargar los datos
    setUser(mockUserData);
    setSessions(mockSessions);
  }, []);

  const renderCards = (sessionData) => {
    return (
      <Row>
        <Col xs={12} md={6}>
          {sessionData.slice(0, 5).map((session, index) => (
            <Card className="mb-3 text-white" key={index}>
              <Card.Img src={session.imageUrl} alt={session.title} />
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
            <Card className="mb-3 text-white" key={index}>
              <Card.Img src={session.imageUrl} alt={session.title} />
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
      {/* Sección central con las tarjetas de sesiones */}
      <div className="flex-grow-1">
        <Row className="mb-4">
          <Col>
            <h3 className="text-center">Cycling</h3>
            {renderCards(sessions.cycling)}
          </Col>
          <Col>
            <h3 className="text-center">Running</h3>
            {renderCards(sessions.running)}
          </Col>
          <Col>
            <h3 className="text-center">Swimming</h3>
            {renderCards(sessions.swimming)}
          </Col>
        </Row>
      </div>

      {/* Sección de los mejores tiempos del usuario */}
      <footer className="bg-teal text-white py-2 mt-auto" style={{ backgroundColor: '#006d77', color: '#fff' }}>
        <Row className="justify-content-center align-items-center">
          <Col className="text-center">
            <img
              src={user.profilePic}
              alt={user.name}
              className="rounded-circle me-2"
              width="50"
            />
            <strong>{user.name}</strong>
          </Col>
          <Col className="text-center">
            <p><strong>Correr:</strong> {user.bestTimes?.running}</p>
          </Col>
          <Col className="text-center">
            <p><strong>Nadar:</strong> {user.bestTimes?.swimming}</p>
          </Col>
          <Col className="text-center">
            <p><strong>Ciclismo:</strong> {user.bestTimes?.cycling}</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default Home;