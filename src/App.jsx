import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [logged, setLogged] = useState(false);

  return logged ? (
    <Dashboard />
  ) : (
    <Login onLogin={() => setLogged(true)} />
  );
}

export default App;