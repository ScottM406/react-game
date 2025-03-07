import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home.tsx"
import About from "./components/About.tsx";
import ReleaseNotes from "./components/ReleaseNotes.tsx";
import Register from "./components/Register.tsx";
import Login from "./components/Login.tsx";
import MyStats from "./components/MyStats.tsx";

const App: React.FC = () => {
  const [token, setToken] = useState<string>("")

  return (
    <Routes>
      <Route path="/" element={<Home token={token}/>}/>
      <Route path="about" element={<About />}/>
      <Route path="releasenotes" element={<ReleaseNotes />}/>
      <Route path="mystats" element={<MyStats />}/>
      <Route path="register" element={<Register token={token} setToken={setToken}/>}/>
      <Route path="login" element={<Login token={token} setToken={setToken}/>}/>
    </Routes>
  )
}

export default App