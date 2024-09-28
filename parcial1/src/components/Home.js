import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import data from '../data/data.json';

const Home = () => {
  const [user, setUser] = useState({});
  const [bestTimes, setBestTimes] = useState({});

  // Función para convertir el tiempo a minutos
  const convertTimeToMinutes = (time) => {
    const [hours, minutes] = time.split(":");
    return parseInt(hours) * 60 + parseInt(minutes.replace("h", ""));
  };

  // Función para calcular los mejores tiempos en cada categoría
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
    // Consumimos los datos desde el archivo JSON y calculamos los mejores tiempos
    setUser(data.user);
    setBestTimes(calculateBestTimes(data.user.sessions));
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
            {renderCards(user.sessions?.cycling || [])}
          </Col>
          <Col>
            <h3 className="text-center">Running</h3>
            {renderCards(user.sessions?.running || [])}
          </Col>
          <Col>
            <h3 className="text-center">Swimming</h3>
            {renderCards(user.sessions?.swimming || [])}
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
            <p><strong>Correr:</strong> {bestTimes?.running}</p>
          </Col>
          <Col className="text-center">
            <p><strong>Nadar:</strong> {bestTimes?.swimming}</p>
          </Col>
          <Col className="text-center">
            <p><strong>Ciclismo:</strong> {bestTimes?.cycling}</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default Home;