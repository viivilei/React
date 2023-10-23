import React, {useState} from 'react'
import './App.css';
import Laskuri from './laskuri'
import Viesti from './Viesti'

function App() {

// App komponentin tila  

const [showLaskuri, setShowLaskuri] = useState(false)
const huomio = () => {
  alert("Huomio!!!!")
}



  return (
    <div className="App">
      <h1>Hello from react!</h1>

      {showLaskuri && <Laskuri huomio={huomio} />}

      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="tervehdys app komponentista"/>
    </div>
  );
}

export default App;
