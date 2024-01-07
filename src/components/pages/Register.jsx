import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { API_URL } from "../../constants/env"

const Register = () => {
  const nav = useNavigate()

  const [error, setError] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setError()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      details: {
        photo: e.target.photo.value,
        facebook: e.target.facebook.value
      }
    }

    fetch(API_URL+'/public/users', {
      method: 'POST',
      body:JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.data)
      nav('/login')
    })
    .catch(err => {
      setError(err)
    })
  }
  return (
    <div className="login">
      <h2 className="title-login">Registro</h2>
      <form className="form-login" onSubmit={handleSubmit}>
        <label className="label-login">
          Correo
          <input className="input-login" type="email" name="email" required />
        </label>
        <label className="label-login">
          Contraseña
          <input className="input-login" type="password" name="password" required />
        </label>
        <label className="label-login">
          Fotografía
          <input className="input-login" type="text" name="photo" required />
        </label>
        <label className="label-login">
          Facebook
          <input className="input-login" type="text" name="facebook" required />
        </label>
        <button className="button-login" type="submit">Registro</button>
      </form>
      {
        error && (
          <p>{error?.res?.data?.data}</p>
        )
      }
    </div>
  )
}

export default Register