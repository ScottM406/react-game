import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-block">
      <h1>Astray Among the Stars</h1>
      <Link className="home-link" to="about">About</Link>
      <Link className="home-link" to="releasenotes">Release Notes</Link>
      <Link className="home-link" to="register">Register</Link>
      <Link className="home-link" to="login">Login</Link>
      <button className="play-button">PLAY</button>
    </div>
  )
}

export default Home;