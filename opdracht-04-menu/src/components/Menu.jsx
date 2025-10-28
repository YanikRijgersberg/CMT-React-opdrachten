import React from "react";

const Menu = ({ title, category, price, img, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="menu-img" />
      <div className="menu-info">
        <header>
          <h2>{title}</h2>
          <h4 className="price">€{price}</h4>
        </header>
        <p className="category">{category}</p>
        <p className="desc">{desc}</p>
      </div>
    </article>
  );
};

export default Menu;
