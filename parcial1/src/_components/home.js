// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import RecordModal from './RecordModal';

function Home() {
  const [userData, setUserData] = useState({});
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    axios.get('https://my.api.mockaroo.com/api_parcial.json?key=bffe5a60')
      .then((response) => {
        setUserData(response.data);
        const randomActivities = Array(10).fill({
          city: 'Ciudad Ejemplo',
          duration: '1h 30m',
          distance: '10km'
        });
        setActivities(randomActivities);
      });
  }, []);

  return (
    <div className="home-container">
      <UserCard user={userData} />
      <div className="activities">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card" onClick={() => setSelectedActivity(activity)}>
            <p>Ciudad: {activity.city}</p>
            <p>Duración: {activity.duration}</p>
            <p>Distancia: {activity.distance}</p>
          </div>
        ))}
      </div>
      {selectedActivity && (
        <RecordModal 
          activity={selectedActivity} 
          onClose={() => setSelectedActivity(null)} 
        />
      )}
    </div>
  );
}

export default Home;
