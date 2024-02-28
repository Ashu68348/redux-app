import React, { useState } from "react";
import { connect } from "react-redux";

const Dropdown = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getUniqueCategories = (data) => {
    let categories = new Set();
    data.forEach(product => {
      categories.add(product.category);
    });
    return Array.from(categories);
  };

  const handleClick = () => {
    const categories = getUniqueCategories(products);
    console.log(categories);
  };

  return (
    <div className="ui fixed menu">
      <div className="ui container center"><h2>BogusBazaar</h2></div>
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropbtn">Clothing</button>
        {/* Dropdown content */}
        {isOpen && (
          <div className="dropdown-content">
            <a href="#">Men's Clothing</a>
            <a href="#">Women's Clothing</a>
          </div>
        )}
      </div>
      {/* Call handleClick on button click */}
      <button onClick={handleClick} className="filterbtn">Jewelry</button>
      <button onClick={handleClick} className="filterbtn-electronics">Electronics</button>
      <input className="search" type="text" placeholder="Search..."></input>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   products: state.productsReducer.products
// });

export default Dropdown;
