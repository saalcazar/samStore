import { NavLink } from "react-router-dom"

const MainMenu = () => {
  return (
    <nav className="main-menu">
      <ul className="main-ul">
        <li>
          <NavLink to="/" className="menu-items">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/products" className="menu-items">Productos</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu