import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [accionActual, setAccionActual] = useState("");
  const [acciones, setAcciones] = useState([
    "Hacerlo de pie.",
    "Besarte apasionadamente en el sofá.",
    "Meterte los dedos lentamente.",
    "Hacerlo contra la pared.",
    "Jugar con tu cuello con besos y mordidas.",
    "Quitarte la ropa con sensualidad.",
    "Tocarte debajo de la mesa.",
    "Susurrarte cosas calientes al oído.",
    "Hacerlo en la ducha.",
    "Explorar tu cuerpo con mis labios.",
    "Atarte las manos y jugar contigo.",
    "Hacerlo en un lugar público.",
    "Pasar mis manos por todo tu cuerpo.",
    "Probar nuevas posiciones contigo.",
    "Hacerlo con los ojos vendados.",
    "Darte un masaje con aceites calientes.",
    "Lamer cada rincón de tu piel.",
    "Hacerlo lentamente y sin prisa.",
    "Jugar contigo usando hielo.",
    "Mordisquear tu oreja mientras te toco.",
    "Besarte desde el cuello hasta la cintura.",
    "Hacerlo en el suelo.",
    "Sentarte sobre mí y dejarte llevar.",
    "Usar mis dedos para provocarte.",
    "Hacerlo frente a un espejo.",
    "Jugar con tus zonas más sensibles.",
    "Deslizar mi lengua por todo tu cuerpo.",
    "Hacerlo con música sensual de fondo.",
    "Probar contigo en la cocina.",
    "Tomarte por sorpresa y hacerlo apasionadamente.",
    "Quitarte la ropa con la boca.",
    "Hacerlo con tus manos atadas.",
    "Lamerte lentamente mientras gimes.",
    "Hacerlo en un lugar donde nos puedan descubrir.",
    "Jugar con un vibrador en tu punto más sensible.",
    "Deslizar hielo por todo tu cuerpo antes de entrar en calor.",
    "Darte nalgadas mientras lo hacemos.",
    "Probar una posición nueva y salvaje.",
    "Hacerlo solo con las luces de las velas encendidas.",
    "Tomarte por la espalda y hacerlo lentamente.",
    "Jugar con mis dedos dentro de ti mientras te beso.",
    "Hacerlo con tus piernas sobre mis hombros.",
    "Explorar cada rincón de tu cuerpo con mi lengua.",
    "Usar esposas para hacerte perder el control.",
    "Besarte con pasión mientras mis manos bajan lentamente.",
    "Hacerlo en la mesa sin importar el desorden.",
    "Ver cómo te tocas mientras te miro fijamente.",
    "Hacerlo en la posición más profunda y placentera.",
    "Darte un masaje sensual con aceites calientes.",
    "Usar mis labios y lengua para excitarte al máximo.",
    "Hacerlo contra el espejo viendo nuestros cuerpos.",
    "Mordisquear cada parte de tu piel antes de hacerte mío/a.",
    "Llevarte al límite con mis caricias antes de hacerlo.",
    "Hacerlo con ropa puesta hasta que no podamos más.",
    "Amarrarte los ojos y jugar contigo lentamente.",
    "Sostener tus manos mientras te doy placer.",
    "Hacerlo sobre la lavadora en movimiento.",
    "Descontrolarnos tanto que terminemos sudando.",
    "Mirarnos fijamente mientras lo hacemos salvajemente.",
    "Hacerlo en una silla sin dejarte mover.",
    "Meter los dedos en la vagina",
  ]);

  const ruletaRef = useRef(null);

  const girarRuleta = () => {
    const indiceAleatorio = Math.floor(Math.random() * acciones.length);
    setAccionActual(acciones[indiceAleatorio]);

    // Animación de la ruleta
    const grados = Math.floor(Math.random() * 360) + 720; // Al menos 2 giros completos
    ruletaRef.current.style.transition = "transform 2s ease-in-out";
    ruletaRef.current.style.transform = `rotate(${grados}deg)`;

    // Restablecer la transición después de la animación
    setTimeout(() => {
      ruletaRef.current.style.transition = "none";
    }, 2000);
  };

  return (
    <div className="juego">
      <div className="ruleta-container">
        <div className="ruleta" ref={ruletaRef}>
          <div className="segmento"></div>
          <div className="segmento"></div>
          <div className="segmento"></div>
        </div>
        <div className="bolita-diamante"></div>
        <button onClick={girarRuleta}>Girar Ruleta</button>
      </div>
      <h2 className="accion">{accionActual}</h2>
    </div>
  );
}

export default App;
