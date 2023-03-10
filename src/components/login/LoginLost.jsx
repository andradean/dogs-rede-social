import React from 'react'
import { PASSWORD_LOST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../forms/Button'
import Input from '../forms/Input'
import Error from '../helper/Error'
import Head from '../helper/Head'

const LoginLost = () => {
  const login = useForm()
  const {data, loading, error, request} = useFetch()

  async function handleSubmit (event) {
    event.preventDefault()
    if(login.validate()) {
    const {url, options} = PASSWORD_LOST({login: login.value, url: window.location.href.replace('perdeu', 'resetar')})
    await request(url, options)
  }
  }

  return (
    <section className='animeLeft'>
      <Head title='Esqueceu a senha'/>
      <h1 className='title'>Esqueceu a senha?</h1>
      {data ? (<p style={{color:'#4c1'}}>{data}</p>) : 
      (<form onSubmit={handleSubmit}>
        <Input label='Email / Usuário' type='text' name='email'  {...login}/>
        {loading ? (<Button disabled>Enviando...</Button>) : (<Button>Enviar email</Button>)}
      </form>)}
      
      <Error error={error}/>
    </section>
  )
}
export default LoginLost
