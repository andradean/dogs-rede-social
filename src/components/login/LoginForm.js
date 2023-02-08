import React from 'react'
import { Link } from 'react-router-dom'


const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

 async function handleSubmit (event) {
    event.preventDefault()
    const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    console.log(response)
    const data = await response.json()
    console.log(data)
   

  }

  return (
    <section onSubmit={handleSubmit}>
      <h1>Login</h1>
      <form>
       <input 
       type='text'
       value={username}
       onChange={({target}) => {setUsername(target.value)}}
       
       />
        <input 
       type='text'
       value={password}
       onChange={({target}) => {setPassword(target.value)}}
       
       />
       <button>Entrar</button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>

    </section>
  )
}

export default LoginForm
