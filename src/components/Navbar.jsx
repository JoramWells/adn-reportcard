import { Link, useNavigate } from "react-router-dom"
import logo from '../imgs/logo.jpeg'

const Navbar = () => {

    const navigate = useNavigate()
  return (

    <div className="header">
    <div onClick={()=>navigate('/')}><img src={logo} alt="Home" className="home-icon" /></div>
    <div className="header-nav">
        <Link to={'/about-us'}>About</Link>
        <Link to={'/contact-us'}>Contact Us</Link>
        <Link to={'/register'}>Sign Up</Link>
        <Link to={'/login'}>Login</Link>

    </div>
</div>
  )
}

export default Navbar