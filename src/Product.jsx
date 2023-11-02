import './App.css';
import React, {useState} from 'react'

// props on nimeltään product
function Product ({product}) {

    // Komponentin tilan määritys
const [showDetails, setShowDetails] = useState(false)


  return (
  <div className ='productDiv'>
        <h4 onClick={() => setShowDetails(!showDetails)}> 
        
            {product.productName}
        </h4>

        {showDetails && <div className="productDetails">
            <h3>{product.productName}</h3>
            <button>Delete</button>
            <button>Edit</button>
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