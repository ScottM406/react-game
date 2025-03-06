import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-block">
      <h1>Astray Among the Stars</h1>
      <Link to="about">About</Link>
      <Link to="releasenotes">Release Notes</Link>
      <Link to="register">Register</Link>
      <Link to="login">Login</Link>
      <h2>PLAY</h2>
    </div>
  )
}

export default Home;