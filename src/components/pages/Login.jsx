import { NavLink, useNavigate } from "react-router-dom"
import { API_URL } from "../../constants/env"
import { setToken } from "../../helpers/auth"
import { useState } from "react"

const Login = () => {
  const nav = useNavigate()

  const [error, setError] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setError()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    fetch(API_URL+'/public/login', {
      method: 'POST',
      body:JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.data)
      setToken(data.data.token)
      nav('/')
    })
    .catch(err => {
      setError(err)
    })
  }
  return (
    <div className="login">
      <h2 className="title-login">Login</h2>
      <form className="form-login" onSubmit={handleSubmit}>
        <label className="label-login">
          Correo
          <input className="input-login" type="email" name="email" required />
        </label>
        <label className="label-login">
          Contraseña
          <input className="input-login" type="password" name="password" required />
        </label>
        <button className="button-login" type="submit">Ingresar</button>
        <NavLink to='/register'>REGISTRATE</NavLink>
      </form>
      {
        error && (
          <p>{error?.res?.data?.data}</p>
        )
      }
    </div>
  )
}

export default Login