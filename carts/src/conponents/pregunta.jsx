import React from 'react';

function Pregunta({ pregunta }) {
  return (
    <div className="carta">
      <div className="contenido-carta">
        <p>{pregunta}</p>
      </div>
    </div>
  );
}

export default Pregunta;