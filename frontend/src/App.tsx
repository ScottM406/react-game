import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx"
import About from "./components/About.tsx";
import ReleaseNotes from "./components/ReleaseNotes.tsx";
import Register from "./components/Register.tsx";
import Login from "./components/Login.tsx";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="releasenotes" element={<ReleaseNotes />}/>
      <Route path="register" element={<Register />}/>
      <Route path="login" element={<Login />}/>
    </Routes>
  )
}

export default App