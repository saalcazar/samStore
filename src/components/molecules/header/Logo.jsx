import { NavLink } from "react-router-dom"
import logo from "../../../assets/logo.svg"
const Logo = () => {
  return (
    <div className="logo">
      <NavLink to='/'>
        <img className="logo-img" src={logo} alt="" />
      </NavLink>
    </div>
  )
}

export default Logo