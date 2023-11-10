import './App.css';
import React, {useState, useEffect} from 'react'
import UserService from './services/User'
import UserAdd from './UserAdd'


function UserList ({setIsPositive, setShowMessage, setMessage, setAccesslevel}) {



    // Komponentin tilan määritys
const [users, setUsers] = useState([])
const [lisäystila, setLisäystila] = useState(false)
const [muokkaustila, setMuokkaustila] = useState(false)
const [reload, reloadNow] = useState(false)
const [muokattavaUser, setMuokattavaUser] = useState(false)
const [search, setSearch] = useState ("")

useEffect( () => {
 UserService.getAll()
 .then(data => {
    setUsers(data)
 })
}
,
[lisäystila, reload, muokkaustila]
)

const handleSearchInputChange = (event) => {
    setSearch(event.target.value.toLowerCase())
}

const editUsers = (user) => {
    setMuokattavaUser(user)
    setMuokkaustila(true)

}

const deleteUser = (user) => {
    let vastaus = window.confirm(`Remove User ${user.firstName}`)


    if (vastaus === true) {
    UserService.remove(user.userid)
    .then(res => {
        if (res.status === 200) {
        setMessage(`Succesfully removed user ${user.firstName}`)
        setIsPositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)

        // Ilmoituksen piilotus
        setTimeout(() => {
        setShowMessage(false)},
        5000
        )
        reloadNow(!reload)
        }
        
            }
        )
        .catch(error => {
            setMessage(error)
            setIsPositive(false)
            setShowMessage(true)
            window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)
    
            setTimeout(() => {
              setShowMessage(false)
             }, 6000)
          })

    } // Jos poisto halutaankin perua
    else {
    setMessage('Poisto peruttu onnistuneesti.')
        setIsPositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)

        // Ilmoituksen piilotus
        setTimeout(() => {
        setShowMessage(false)},
        5000
        )
    }
}
        

  return (
  <>
        <h1><nobr>Users</nobr>
           
           {lisäystila && <UserAdd setLisäystila={setLisäystila} setIsPositive={setIsPositive}
           setMessage={setMessage} setShowMessage={setShowMessage} /> }
                
                {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}> add new </button>} </h1>

                {!lisäystila && !muokkaustila && 
                <input placeholder="Search by last name" value={search} onChange={handleSearchInputChange} />
                }

        {!lisäystila && !muokkaustila &&
        <table id="userTable">
            <thead>
                <th> First name </th>
                <th> Last name </th>
                <th> Email </th>
                <th> Access Level ID </th>    
                <th> Delete user </th>          
            </thead>

            <tbody>

            

        {users && users.map(user =>
                {
                  const lowerCaseName = user.lastName.toLowerCase()
                  if (lowerCaseName.indexOf(search) > -1) {
                      return(

                        <tr key={user.userid}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.accesslevelId}</td>
                            <td><button class="nappi2" onClick={() => deleteUser(user)}>Poista käyttäjä</button></td>
                        </tr>
                  
                  )
                        }
                      }
                )
            }
            </tbody>

                </table>
}
    
        </>
      )
    }

export default UserList;