import { useState,useEffect } from "react";
import "./App.css";

const resultados = [
  "Alguien cercano siente una fuerte envidia por ti.",
  "Esa mirada no es admiración… es envidia.",
  "No todos los que sonríen están de tu lado.",
  "Tu progreso incomoda a alguien cercano.",
  "Tu energía despierta envidia..."
];

const nombres = [
  "Andrea","María","Luis","Carlos","José","Miguel","Juan","Pedro",
  "Sofía","Valeria","Camila","Daniela","Ana","Lucía","Paola",
  "Diego","Fernando","Javier","Andrés","Sebastián"
];

const apellidos = [
  "García","Rodríguez","Pérez","López","Martínez","Sánchez","Ramírez",
  "Torres","Flores","Gómez","Vargas","Rojas","Castillo","Cruz","Morales",
  "Herrera","Navarro","Mendoza","Ortega","Delgado","Salazar","Chávez",
  "Reyes","Cabrera","Silva","Pacheco","Quispe","Huamán","Valdez","Aguirre"
];


function App() {
  const [step, setStep] = useState<"start" | "loading" | "result">("start");
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");
  const [lista, setLista] = useState<string[]>([]);


  const [count, setCount] = useState(127);

useEffect(() => {
  const int = setInterval(() => {
    setCount(c => c + Math.floor(Math.random() * 3));
  }, 4000);
  return () => clearInterval(int);
}, []);


useEffect(() => {
  if (step === "start") {
    const el = document.getElementById("promo-native");
    if (!el) return;

    el.innerHTML = "";

    const s = document.createElement("script");
    s.async = true;
    s.setAttribute("data-cfasync", "false");
    s.src =
      "https://pl28704913.effectivegatecpm.com/e2f8b803840c845e3b00e6f0911cd048/invoke.js";

    el.appendChild(s);
  }
}, [step]);


 const start = () => {
  setStep("loading");
  setProgress(0);

  const r = resultados[Math.floor(Math.random() * resultados.length)];
  setText(r);

  // 👉 Generar 3 nombres falsos con 2 apellidos
  const fake = Array.from({ length: 3 }, generarNombre);
  setLista(fake);

  let p = 0;
  const interval = setInterval(() => {
    p += Math.random() * 8;
    if (p >= 100) {
      p = 100;
      clearInterval(interval);
      setStep("result");
    }
    setProgress(p);
  }, 120);
};

  const openPromo = () => {
    const s = document.createElement("script");
    s.src =
      "https://pl28704925.effectivegatecpm.com/b3/5a/91/b35a91b3d1b7c12d2398559a8f4f374f.js";
    s.async = true;
    document.body.appendChild(s);
  };

const generarNombre = () => {
  const n = nombres[Math.floor(Math.random() * nombres.length)];
  const a1 = apellidos[Math.floor(Math.random() * apellidos.length)];
  let a2 = apellidos[Math.floor(Math.random() * apellidos.length)];

  while (a2 === a1) {
    a2 = apellidos[Math.floor(Math.random() * apellidos.length)];
  }

  return `${n} ${a1} ${a2}`;
};



  return (
    <div className="app">

      <div className="card">
      <small className="counter">🔥 {count} personas lo probaron hoy</small>
      {step === "start" && (
        <>
          <h1>😈 Hay personas que sienten celos de ti</h1>
          <p>Algunos sonríen… pero no soportan verte crecer.</p>
          <button className="btn" onClick={start}>
            DESCUBRIR QUIÉN
          </button>

          <div className="promo-native">
          <p className="ad-title">Sugerido para ti</p>
          <div id="promo-start"></div>
        </div>
        </>
      )}

      {step === "loading" && (
        <div className="loading">
          <p>Analizando energía social...</p>
          <div className="bar">
            <div className="fill" style={{ width: `${progress}%` }} />
          </div>
          <small>{Math.floor(progress)}%</small>
        </div>
      )}
{step === "result" && (
  <div className="result">
    <h2>Resultado</h2>
    <p>{text}</p>

    <ul style={{ listStyle: "none", padding: 0 }}>
      {lista.map((n, i) => (
        <li key={i}>👤 {n}</li>
      ))}
    </ul>

    <small>(Solo uno es real)</small>
<br></br>
    <button className="btn small" onClick={openPromo}>
      Ver detalles
    </button>
  </div>
)}
    </div>
    </div>
  );
}

export default App;