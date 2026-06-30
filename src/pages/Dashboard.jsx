import { useState } from "react";
import MapView from "../components/MapView";
import { cases } from "../data/cases";

export default function Dashboard() {

  const [selectedCase, setSelectedCase] = useState(cases[0]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "70%",
        }}
      >
        <MapView
          onSelectCase={setSelectedCase}
        />
      </div>

      <div
        style={{
          width: "30%",
          backgroundColor: "#1F2937",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Caso Seleccionado</h2>

        <p>
          <strong>Nombre:</strong>{" "}
          {selectedCase.name}
        </p>

        <p>
          <strong>Fecha:</strong>{" "}
          {selectedCase.date}
        </p>

        <p>
          <strong>Descripción:</strong>{" "}
          {selectedCase.description}
        </p>
      </div>
    </div>
  );
}
<div
  style={{
    marginTop: "20px",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#374151",
  }}
>
  <h3>Estado</h3>
  <p>Activo</p>

  <h3>Prioridad</h3>
  <p>Alta</p>
</div>