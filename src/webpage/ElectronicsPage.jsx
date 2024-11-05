import React from 'react'
import { Link } from 'react-router-dom'
import { electronics } from '../data/dataset'

const ElectronicsPage = () => {
  return (
    <div>
        <div className="card-header">
            <h1>Electronics</h1>
        <Link to={'/'} className="btn-danger-link">Home</Link>
        </div>
        <div className="card-grid">
        {electronics.map((item)=>{
            return(
            <div className="card" key={item.id}>
                <img src={item.imageLink} alt={item.name}/>

                <p>
        <span className='product-details'>Product :</span>{item.name}</p>
                <p>
        <span className='product-details'>Price :</span>{item.price}</p>
                <p>
        <span className='product-details'>Quantity Available :</span>{item.quantityAvailable}
                </p>
                <Link to={`/electronics/${item.id}`} className='btn-link'>view product</Link>
            </div>
        )})}
        </div>
    </div>
  )
}

export default ElectronicsPage
