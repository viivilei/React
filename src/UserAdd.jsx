import './App.css';
import React, {useState} from 'react'
import UserService from './services/User'
import md5 from 'md5'


function UserAdd ({setLisäystila, setShowMessage, setMessage, setIsPositive}) {

    // Komponentin tilan määritys

const [newFirstname, setNewFirstname] = useState('')
const [newLastname, setNewLastname] = useState('')
const [newEmail, setNewEmail] = useState('')
const [newAccesslevelId, setNewAccesslevelId] = useState(2)
const [newUsername, setNewUsername] = useState('')
const [newPassword, setNewPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [passwordsMatch, setPasswordsMatch] = useState(true)

const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };



const handleSubmit = (event) => {
    event.preventDefault();

    let newUser = {};
    if (newPassword === confirmPassword) {
            newUser = {        
            firstname: newFirstname,
            lastname: newLastname,
            email: newEmail,
            accesslevelId: parseInt(newAccesslevelId),
            username: newUsername,
            password: md5(newPassword) //Salaus md5 kirjaston metodilla
            
            };
            setPasswordsMatch(true);
    


        // Add your form submission logic here
      } else {
        // Passwords do not match, set passwordsMatch state to false
        setPasswordsMatch(false);
        alert("Ei täsmää!")
        return;
      }
    
  
        





console.log(newUser)

UserService.create(newUser)
.then(response => {
    if (response.status === 200) {
        setMessage("Added new User: " + newUser.firstname + newUser.lastname)
        setIsPositive(true)
        setShowMessage(true)

        setTimeout(() => {
            setShowMessage(false)
        }, 5000)
        setLisäystila(false)
        
     }
 
       })
       .catch(error => {
         setMessage(error)
         setIsPositive(false)
         setShowMessage(true)

         setTimeout(() => {
            setShowMessage(false)
        }, 6000)
        
       })


}

  return (
  <div id="addNew">
    <h2>User add</h2>

    <form onSubmit={handleSubmit}>
        <div>
    <input type="text" value={newFirstname} placeholder="First name" 
                    onChange={({ target }) => setNewFirstname(target.value)} required />
            </div>
            <div>
                <input type="text" value={newLastname} placeholder="Last name"
                    onChange={({ target }) => setNewLastname(target.value)} required />
            </div>
            <div>
                <input type="email" value={newEmail} placeholder="Email"
                    onChange={({ target }) => setNewEmail(target.value)} />
            </div>
            <div>
                <input type="number" value={newAccesslevelId} placeholder="Access level"
                    onChange={({ target }) => setNewAccesslevelId(target.value)} />
            </div>
            <div>
                <input type="text" value={newUsername} placeholder="Username"
                    onChange={({ target }) => setNewUsername(target.value)} />
            </div>
            <div>
                <input type="password" value={newPassword} placeholder="Password"
                    onChange={({ target }) => setNewPassword(target.value)} />
            </div>
            <div>
                <input type="password" value={confirmPassword} placeholder="Confirm Password"
                    onChange={handleConfirmPasswordChange} />
            </div>
            {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match!</p>}
           
        
            

        <input type='submit' value='Save' />
        <input type='button' value='back' onClick={() => setLisäystila(false)}/>

    </form>

   
        

       
  </div>
  );
}

export default UserAdd;