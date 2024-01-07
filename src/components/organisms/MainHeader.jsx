import Logo from "../molecules/header/Logo"
import MainMenu from "../molecules/header/MainMenu"

const MainHeader = () => {
  return (
    <div className="bg-gradient content">
      <div className="container">
        <Logo />
        <MainMenu />
      </div>
    </div>
  )
}

export default MainHeader