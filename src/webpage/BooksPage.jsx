import React from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../data/dataset";

const BooksPage = () => {
  //Navigate to Home...

  const navigate = useNavigate();

  const NavigateToHome = () => {
    navigate("/");
  };

  const navigateToProductDetails = (id) => {
    navigate(`/books/${id}`);
  };

  return (
    <div>
      <div className="card-header">
        <h1>Books Page</h1>

        <button className="btn-danger-link" onClick={NavigateToHome}>
          Home
        </button>
        {/* <Link to={'/'} className="btn-danger-link">Home</Link> */}
      </div>
      <div className="card-grid">
        {books.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img
                src={item.imageLink}
                alt={item.price}
                style={{ height: "450px" }}
              />

              <p>
                <span className="Product-details">Price :</span>
                {item.price}
              </p>
              <button
                className="btn-link"
                onClick={() => {
                  navigateToProductDetails(item.id);
                }}
              >
                view product
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BooksPage;
