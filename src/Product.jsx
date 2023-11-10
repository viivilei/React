import './App.css';
import React, {useState} from 'react'
import ProductService from './services/Product'

// props on nimeltään product
const Product = ({product, editProduct, setIsPositive, setMessage, setShowMessage, reload, reloadNow}) => {

    // Komponentin tilan määritys
const [showDetails, setShowDetails] = useState(false)

const deleteProduct = (product) => {
    let vastaus = window.confirm("Remove product: " + product.productName)

    if (vastaus === true) {
    ProductService.remove(product.productId)
    .then(res => {
        if (res.status === 200) {
        setMessage(`Successfully removed product ${product.productName}`)
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
  <div className ='productDiv'>
        <h4 onClick={() => setShowDetails(!showDetails)}> 
        
            {product.productName}
        </h4>

        {showDetails && <div className="productDetails">
            <h3>{product.productName}</h3>
            <button class="nappi3" onClick={() => deleteProduct(product)}>Delete</button>
            <button class="nappi3" onClick={() => editProduct(product)}>Edit</button>
            <table>
                <thead>
                    <tr>
                        <th>SupplierID</th>
                        <th>CategoryID</th>
                        <th>UnitPrice</th>
                        <th>Quantity per Unit</th>
                        <th>Units in Stock</th>
                        <th>Units on Order</th>
                        <th>Reorder Level</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.supplierId}</td>
                        <td>{product.categoryId}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.quantityPerUnit}</td>
                        <td>{product.unitsInStock}</td>
                        <td>{product.unitsOnOrder}</td>
                        <td>{product.reorderLevel}</td>                      
                    </tr>
                </tbody>

            </table></div>

        }



       
  </div>
  );
}

export default Product;