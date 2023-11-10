import React, {useState, useEffect} from 'react'
import './App.css';
import Laskuri from './laskuri'
import Posts from './Posts'
import CustomerList from './CustomerList'
import Message from './Message';
import ProductList from './ProductList';
import UserList from './UserList'
import LoginForm from './LoginForm'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {

// App komponentin tila  

const [showLaskuri, setShowLaskuri] = useState(false)

// Statet messagen näyttämistä varten ( ja muut statet )

const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)
const [loggedInUser, setLoggedInUser] = useState("")
const [accesslevel, setAccesslevel]  = useState("")




useEffect(() => {
  let storedUser = localStorage.getItem("username")
  if (storedUser != null) {
    setLoggedInUser(storedUser)
  }
  let access = localStorage.getItem("accesslevelId")
  if (access == 1) {
    setAccesslevel(access)
  }
} , [])

const logout = () => {
  localStorage.clear()
  setLoggedInUser('')
}

  return (
    <div className="App">



      { !loggedInUser && 
      <LoginForm setIsPositive={setIsPositive} setMessage={setMessage}
        setShowMessage={setShowMessage} setLoggedInUser={setLoggedInUser} setAccesslevel={setAccesslevel} /> }

        { loggedInUser &&
      <Router>


        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Link to={'/Customers'} className='nav-link'>Customers</Link>
            <Link to={'/Products'} className='nav-link'>Products</Link>
            { accesslevel && <Link to={'/Users'} className='nav-link'>Users</Link> }
            <Link to={'/Laskuri'} className='nav-link'>Laskuri</Link> 
            <Link to={'/Posts'} className='nav-link'>Posts</Link> 
            <button className="nappi3" onClick={() => logout()}>Log out</button>
            
            

          </Nav>

        </Navbar>

      <h1>Hello from react!</h1>
      
      

      {loggedInUser == "" && <LoginForm setIsPositive={setIsPositive} setMessage={setMessage}
        setShowMessage={setShowMessage} setLoggedInUser={setLoggedInUser} />}

      {showMessage && <Message message={message} isPositive={isPositive} /> }

      <Switch>
      <Route path="/Customers"> <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/> </Route>
      <Route path="/Products"> <ProductList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/> </Route>
      
      
      { accesslevel && <Route path="/Users"> <UserList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} setAccesslevel={setAccesslevel} /> </Route> }

      
       <Route path="/Laskuri"> <Laskuri/> </Route> 
       <Route path="/Posts"> <Posts/> </Route> 

      </Switch>
      </Router>
}
    </div>
  );
}

export default App;
