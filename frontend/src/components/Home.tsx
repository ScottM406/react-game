import { Link } from "react-router-dom";

interface HomeProps {
  token: string
}

const Home: React.FC<HomeProps> = ({ token }) => {

  return (
    <div className="home-block">
      <h1>Astray Among the Stars</h1>
      <Link className="home-link" to="about">About</Link>
      <Link className="home-link" to="releasenotes">Release Notes</Link>
      {token && <Link className="home-link" to="mystats">My Stats</Link>}
      {!token && <Link className="home-link" to="register">Register</Link>}
      {!token &&<Link className="home-link" to="login">Login</Link>}
      {token && <h2 id="logged-in-home-message">Logged in</h2>}
      {token ?
      <button className="play-button">PLAY</button>
      : <button className="inactive-play-button">PLAY</button>
      }
    </div>
  )
}

export default Home;