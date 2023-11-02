import './App.css';
import React, {useState} from 'react'
import ProductService from './services/Product'

function ProductAdd ({setLisäystila}) {

    // Komponentin tilan määritys

const [newProductName, setNewProductName] = useState('')
const [newSupplierId, setNewSupplierId] = useState('')
const [newCategoryId, setNewCategoryId] = useState('')

const [newQuantityPerUnit, setNewQuantityPerUnit] = useState('')
const [newUnitPrice, setNewUnitPrice] = useState('')
const [newUnitsInStock, setNewUnitsInStock] = useState('')
const [newUnitsOnOrder, setNewUnitsOnOrder] = useState('')
const [newReorderLevel, setNewReorderLevel] = useState('')
const [newDiscontinued, setNewDiscontinued] = useState('')


const handleSubmit = (event) => {
    event.preventDefault()
    var newProduct = {
        productName: newProductName,
        supplierId: newSupplierId,
        categoryId: newCategoryId,
        quantityPerUnit: newQuantityPerUnit,
        unitPrice: newUnitPrice,
        unitsInStock: newUnitsInStock,
        unitsOnOrder: newUnitsOnOrder,
        reorderLevel: newReorderLevel
        //discontinued: newDiscontinued
    }
    ProductService.create(newProduct)
    .then(response => {
        if (response.status === 200) {
            alert("Added new product: " + newProduct.productName)
        }

    })
    .catch(error => {
        alert("Error")
    })

    setTimeout(() => {
        setLisäystila(false)
    }, 500)
}


  return (
    <div id="addNew">
         <h2>Product add</h2>

<form onSubmit={handleSubmit}>
    <div>
<input type="text" value={newProductName} onChange={({target}) => setNewProductName(target.value)} placeholder="Product name" />
        </div>
        <div>
            <input type="text" value={newSupplierId} onChange={({target}) => setNewSupplierId(target.value)} placeholder="Supplier ID" />
        </div>
        <div>
            <input type="text" value={newCategoryId} onChange={({target}) => setNewCategoryId(target.value)} placeholder="Category ID" />
        </div>
        <div>
            <input type="text" value={newQuantityPerUnit} onChange={({target}) => setNewQuantityPerUnit(target.value)} placeholder="Quantity per unit" />
        </div>
        <div>
            <input type="text" value={newUnitPrice} onChange={({target}) => setNewUnitPrice(target.value)} placeholder="Unit price" />
        </div>
        <div>
            <input type="text" value={newUnitsInStock} onChange={({target}) => setNewUnitsInStock(target.value)} placeholder="Units in stock" />
        </div>
        <div>
            <input type="text" value={newUnitsOnOrder} onChange={({target}) => setNewUnitsOnOrder(target.value)} placeholder="Units on order" />
        </div>
        <div>
            <input type="text" value={newReorderLevel} onChange={({target}) => setNewReorderLevel(target.value)} placeholder="Reorder level" />
        </div>
    
        

    <input type='submit' value='Save' />
    <input type='button' value='back' onClick={() => setLisäystila(false)} />

</form>

    </div>

        

        

       

        
  
  );
}

export default ProductAdd;