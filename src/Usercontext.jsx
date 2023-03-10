import React from 'react'
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from './api'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

export const UserStorage= ({children}) => {
  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const navigate = useNavigate()

  
  const userlogout = React.useCallback ( 
  async function () {
   setData(null)
   setError(null)
   setLoading(false)
   setLogin(false)
   window.localStorage.removeItem('token')
   navigate('/login')
},

[navigate],
)

async function getUser (token) {
    const {url, options} = USER_GET(token)
    
    const response = await fetch(url, options)
    const data = await response.json()
    setData(data)
    setLogin(true)
    console.log(data);
  }

async function userLogin(username, password) {
   try{
    setError(null)
    setLoading(true)
   const {url, options} = TOKEN_POST({username, password})
   const response = await fetch(url, options)
   if(!response.ok) throw new Error(`Error: Usuário ou senha inválido`)
   const {token} = await response.json()
   window.localStorage.setItem('token', token)
   await getUser(token)
   navigate('/conta')

   } catch(error) {
     setError(error.message)
     setLogin(false)
   } finally {
    setLoading(false)

   }

}

React.useEffect(() => {
  async function autoLogin() {
        const token = window.localStorage.getItem('token')
        if(token) {
          try {
          setError(null)
          setLoading(true)  
          //setLogin(true) 
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options) 
          if(!response.ok) throw new Error('Token inválido')
          await getUser(token)
          } catch (error) {
           userlogout()
          } finally {
            setLoading(false)   
  
          }
        } else {
          setLogin(false)
        }
      }
      autoLogin()
    }, [userlogout])
  
  return (
    <UserContext.Provider value={{userLogin, data, userlogout, error, loading, login}}>
      {children}
    </UserContext.Provider>
  )
}

 
