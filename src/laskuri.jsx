import './App.css';
import React, {useState} from 'react'

// propsi otettu vastaan suoraan nimellä
function Laskuri ({huomio}) {

    // Komponentin tilan määritys
const [luku, setLuku] = useState(0)

  return (
  <>
        <h3> {luku} </h3>
        <button onClick={() => setLuku(luku + 1)}>+</button>
        <button onClick={() => setLuku(luku - 1)}>-</button>
        <button onClick={huomio}> Huomio </button>

  </>
  );
}

export default Laskuri;