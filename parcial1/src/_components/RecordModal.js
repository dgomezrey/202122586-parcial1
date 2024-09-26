import React from 'react';

function RecordModal({ activity, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Detalles de la Actividad</h2>
        <p>Ciudad: {activity.city}</p>
        <p>Duración: {activity.duration}</p>
        <p>Distancia: {activity.distance}</p>
      </div>
    </div>
  );
}

export default RecordModal;
