import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ServiceAgreementForm from "./components/ServiceAgreementForm";
import Transition from "./components/Transition";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminDashboard from "./components/AdminDashborad";
import "./AdminDashboard.css";

function App() {
  const [currentPage, setCurrentPage] = useState("form");

  return (
    <>
      {currentPage === "form" && (
        <ServiceAgreementForm
          onComplete={() => setCurrentPage("transition")}
        />
      )}

      {currentPage === "transition" && (
        <Transition
          onFinish={() => setCurrentPage("dashboard")}
        />
      )}

      {currentPage === "dashboard" && <Dashboard />}
   
   {/*<AdminDashboard />*/}
    </>
  );
}

export default App;
