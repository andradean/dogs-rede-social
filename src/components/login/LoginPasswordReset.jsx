import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PASSWORD_RESET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../forms/Button'
import Input from '../forms/Input'
import Error from '../helper/Error'
import Head from '../helper/Head'

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const { password } = useForm('')
  const { error, loading, request} = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)
  }, [])

  async function handleSubmit (event) {
    event.preventDefault()
    if(password.validate()) {
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value
    })
    const { response } = await request(url, options)
    if(response.ok) navigate('/login')
  }
}

  return (
    <section className='animeLeft'>
      <Head title='Nova Senha'/>
      <h1 className='title'>Nova senha</h1>
    <form onSubmit={handleSubmit}>
      <Input label='Nova Senha' type='password' name='password' {...password}/>
      {loading ? (<Button disabled>Criando...</Button>) : (<Button>Criar Nova Senha</Button>)}
      
    </form>
    <Error error={error}/>
    </section>
  )
}

export default LoginPasswordReset
