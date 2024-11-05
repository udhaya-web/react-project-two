import React from 'react'
import { books } from '../data/dataset'
import { useParams } from 'react-router-dom'

const BooksDetailsPage = () => {

    const {id} = useParams();
    const item = books.find((x)=> x.id === +id);

    if(!item){
        return(
            <div style={{paddingTop:"6rem",fontSize:'1.4rem',textAlign:'center'}}>
            Item Not Found
            </div>
        )
    }
  return (
    <div className='sidebar'>
        <h1>Product Details</h1>
        <div className="sidebar-content">
        <div className="product">
           <img 
           src={item.imageLink} 
           alt={item.name}
           />
        <p>
           <span className='product-details'>Title :</span>{item.title}
           </p>
        <p>
           <span className='product-details'>Author :</span>{item.author}
           </p>
        <p>
        <span className='product-details'>Price :</span>{item.price}
           </p>

        <span className='product-details'>InStock :</span>{item.quantityAvailable}
        </div>
        </div>
    </div>
  )
}


export default BooksDetailsPage
