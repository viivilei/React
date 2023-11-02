import React, {useState} from 'react'
import './App.css';
import Laskuri from './laskuri'
import Viesti from './Viesti'
import Posts from './Posts'
import CustomerList from './CustomerList'
import Message from './Message';
import ProductList from './ProductList';

function App() {

// App komponentin tila  

const [showLaskuri, setShowLaskuri] = useState(false)

// Statet messagen näyttämistä varten

const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)

const huomio = () => {
  alert("Huomio!!!!")
}



  return (
    <div className="App">
      <h1>Hello from react!</h1>

      <ProductList />

      {showMessage && <Message message={message} isPositive={isPositive} /> }

      <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/>
      <Posts />

      {showLaskuri && <Laskuri huomio={huomio} />}

      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="tervehdys app komponentista"/>
    </div>
  );
}

export default App;
