import './App.css';
import React, {useState, useEffect} from 'react'
import ProductService from './services/Product'
import Product from './Product'
import ProductAdd from './ProductAdd'

const ProductList = ({setIsPositive, setShowMessage, setMessage}) => {

    // Komponentin tilan määritys
const [products, setProducts] = useState([])
const [showProducts, setShowProducts] = useState(false)
const [lisäystila, setLisäystila] = useState(false)
const [reload, reloadNow] = useState(false)

useEffect( () => {
    ProductService.getAll()
    .then(data => {
       setProducts(data)
})
},
[lisäystila, reload]
)
  return (
  <>
        <h1><nobr style={{ cursor: 'pointer' }}
        onClick={() => setShowProducts(!showProducts)}> Products </nobr>
        
        {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new </button>}</h1>

        {lisäystila && <ProductAdd setLisäystila={setLisäystila}
        setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
        />}

        

        { showProducts && products && products.map( p => (
            <Product key ={p.productId} product={p} reloadNow={reloadNow} reload={reload}
            setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />  
        )
            ) }

        
  </>
  );
}

export default ProductList;