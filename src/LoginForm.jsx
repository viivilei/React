import './App.css';
import React, {useState} from 'react'
import LoginService from './services/Auth'
import md5 from 'md5'


function LoginForm ({setLoggedInUser, setAccesslevel, setShowMessage, setMessage, setIsPositive}) {

    // Komponentin tilan määritys

const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')





const handleSubmit = (event) => {
    event.preventDefault()


      var userForAuth = {
        username: userName,
        password: md5(password)
}


LoginService.authenticate(userForAuth)
.then(response => {
    if (response.status === 200) {

        console.log(response.data)
        console.log(response.data.accesslevelId);
 
    // Talletetaan tietoja selaimen local storageen (f12 application välilehti)
    localStorage.setItem("username", response.data.username)
    localStorage.setItem("accesslevelId", response.data.accesslevelId)
    localStorage.setItem("token", response.data.token)

    setLoggedInUser(response.data.username)
    setAccesslevel(response.data.accesslevelId)
    
   setMessage(`Logged in as: ${userForAuth.username} with accesslevel ${response.data.accesslevelId}`)
   setIsPositive(true)
   setShowMessage(true)
  
   setTimeout(() => {
    setShowMessage(false)
      // Asetetaan app komponentissa olevaan stateen
      setLoggedInUser(response.data.userName)
      setAccesslevel(response.data.accesslevelId)
   }, 3000)

}
  })
    .catch (error => {
        setMessage(error.message)
        setIsPositive(false)
        setShowMessage(true)
        setTimeout(() => {
          setShowMessage(false)
          window.location.reload()
        } , 6000)
    })
    
  }

  const emptyFields = () => {
    setUserName("")
    setPassword("")
  }

 return(
   
        <div className="loginWindow">
           <h3>Login</h3>
           <form onSubmit={handleSubmit}>
              <div>
               <input type="text" value={userName} onChange={({target}) => setUserName(target.value)} placeholder="Username" />
               <input type="password" value={password} onChange={({target}) => setPassword(target.value)} placeholder="Password" />
               </div><br></br>
               <div>
            
               <input type="submit" className="nappi2" value="Login" />
               <input type="submit" className="nappi2" value="Empty" onClick={() => emptyFields()} />
               </div>
           </form>      
       </div>
  )
}

export default LoginForm