import './App.css';
import React, {useState} from 'react'
import ProductService from './services/Product'

function ProductEdit ({setMuokkaustila, setShowMessage, setMessage, setIsPositive, muokattavaProduct}) {

    // Komponentin tilan määritys

const [newProductId, setNewProductId] = useState(muokattavaProduct.productId)
const [newProductName, setNewProductName] = useState(muokattavaProduct.productName)
const [newSupplierId, setNewSupplierId] = useState(muokattavaProduct.supplierId)
const [newCategoryId, setNewCategoryId] = useState(muokattavaProduct.categoryId)

const [newQuantityPerUnit, setNewQuantityPerUnit] = useState(muokattavaProduct.quantityPerUnit)
const [newUnitPrice, setNewUnitPrice] = useState(muokattavaProduct.unitPrice)
const [newUnitsInStock, setNewUnitsInStock] = useState(muokattavaProduct.unitsInStock)
const [newUnitsOnOrder, setNewUnitsOnOrder] = useState(muokattavaProduct.unitsOnOrder)
const [newReorderLevel, setNewReorderLevel] = useState(muokattavaProduct.reorderLevel)



const handleSubmit = (event) => {
    event.preventDefault()
    var newProduct = {
        productId: newProductId,
        productName: newProductName,
        supplierId: newSupplierId,
        categoryId: newCategoryId,
        quantityPerUnit: newQuantityPerUnit,
        unitPrice: newUnitPrice,
        unitsInStock: newUnitsInStock,
        unitsOnOrder: newUnitsOnOrder,
        reorderLevel: newReorderLevel
    }
    ProductService.update(newProduct)
    .then(response => {
        if (response.status === 200) {
            setMessage("Edited product: " + newProduct.productName)
            setIsPositive(true)
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
               }, 5000)
        
               setMuokkaustila(false)
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
    <div id="edit">
         <h2>Product Edit</h2>

<form onSubmit={handleSubmit}>
<div>
    <input type="text" value={newProductId} disabled />
            </div>
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
    <input type='button' value='back' onClick={() => setMuokkaustila(false)} />

</form>

    </div>

        

        

       

        
  
  );
}

export default ProductEdit;