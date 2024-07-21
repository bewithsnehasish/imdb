import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <Link to="/" ><img className="header_icon" src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" />
          </Link>
          <Link to="/movie/popular" >Popular</Link>
          <Link to="/movie/popular" >Top Rated</Link>
          <Link to="/movie/upcoming" >Upcoming</Link>
        </div>
      </div>
    </>
  )
}

export default Header
