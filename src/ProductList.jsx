import './App.css';
import React, {useState, useEffect} from 'react'
import ProductService from './services/Product'
import Product from './Product'
import ProductAdd from './ProductAdd'

function ProductList () {

    // Komponentin tilan määritys
const [products, setProducts] = useState([])
const [showProducts, setShowProducts] = useState(false)
const [lisäystila, setLisäystila] = useState(false)

useEffect( () => {
    ProductService.getAll()
    .then(data => {
       setProducts(data)
})
},
[lisäystila]
)
  return (
  <>
        <h1><nobr style={{ cursor: 'pointer' }}
        onClick={() => setShowProducts(!showProducts)}> Products </nobr>
        
        {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new </button>}</h1>

        {lisäystila && <ProductAdd setLisäystila={setLisäystila}/>}

        

        { showProducts && products && products.map( p => (
            <Product key ={p.productId} product={p} />  
        )
            ) }

        
  </>
  );
}

export default ProductList;