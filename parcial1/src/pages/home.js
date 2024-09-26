import React, { useEffect, useState } from 'react';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [activities, setActivities] = useState({
    cycling: [],
    running: [],
    swimming: []
  });

  
  const fetchData = async () => {
    try {
      const response = await fetch('https://my.api.mockaroo.com/api_parcial.json?key=bffe5a60');
      const data = await response.json();

      
      setUserData({
        name: data.name,
        profileImage: data.pic,
        bestTimes: {
          running: data.running, 
          swimming: data.swimming, 
          biking: data.biking, 
        },
      });

    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="d-flex align-items-center p-3 bg-info text-white">
        <img
          src={userData.profileImage}
          alt="Profile"
          className="rounded-circle"
          style={{ width: '50px', height: '50px' }}
        />
        <div className="ms-3">
          <h4>{userData.name}</h4>
          <div className="d-flex">
            <div className="me-3">Running: {userData.bestTimes.running}</div>
            <div className="me-3">Swimming: {userData.bestTimes.swimming}</div>
            <div className="me-3">Biking: {userData.bestTimes.biking}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;