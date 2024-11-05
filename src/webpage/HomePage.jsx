import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
   <>
   <div className="container">
       <h1 className="title">Welcome to E_Shop </h1>
       <div className='home'>
        <div className="category">
            <h1>Pick Your Category</h1>

            <div className="links">
            <Link
            to={"/electronics"} 
            className='link'>Electronics</Link>
            <Link 
            to={'/books'} 
            className='link'>Books</Link>
            </div>
         </div>
       </div>
    </div>
   </>
  )
}

export default HomePage
