export default function Login({ onLogin }) {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#111827",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          backgroundColor: "#1F2937",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          style={{
            color: "#2CC5C9",
            textAlign: "center",
          }}
        >
          INOVISEC
        </h1>

        <input
          type="text"
          placeholder="Usuario"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
          }}
        />

        <button
           onClick={onLogin}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2CC5C9",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}