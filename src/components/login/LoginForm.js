import React from 'react'
import { Link } from 'react-router-dom'
import { TOKEN_POST, USER_GET } from '../../api'
import useForm from '../../Hooks/useForm'
import Button from '../forms/Button'
import Input from '../forms/Input'


const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  React.useEffect(() => {
    const token = window.localStorage.getItem('token')
    if(token) {
      getUser(token)
    }

  }, [])
  
  async function getUser (token) {
    const {url, options} = USER_GET(token)
    
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

  }


 async function handleSubmit (event) {
    event.preventDefault()
    
    if(username.validate() && password.validate()) {
    const {url, options} = TOKEN_POST({username: username.value, password: password.value})
    
    const response = await fetch(url, options)
    const data = await response.json()
    window.localStorage.setItem('token', data.token)
    console.log(data);
    getUser(data.token)   
   
  }
  }

  return (
    <section onSubmit={handleSubmit}>
      <h1>Login</h1>
      <form>
       <Input label='Usuário' type='text'name='username' {...username}/>
       <Input label='Senha' type='password' name='password' {...password}/>
      
       <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>

    </section>
  )
}

export default LoginForm
