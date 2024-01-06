import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

const App = () => {
  return (
    <>
      <MainHeader />
      <div className="container-width">
        <Outlet />
      </div>
    </>
  )
}

export default App