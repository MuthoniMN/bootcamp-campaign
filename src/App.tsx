import './App.css'
import { Routes, Route } from "react-router";
import Auth from "./layouts/Auth";
import Registration from "./pages/Registration";
import LandingPage from "./pages/LandingPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<Auth />}>
        <Route path="/register" element={<Registration />} />
      </Route>
    </Routes>
  )
}

export default App
