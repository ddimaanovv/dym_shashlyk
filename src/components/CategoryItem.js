import React, { Component } from "react";

class CategoryItem extends Component {
  render() {
    const { item, onElemCkick } = this.props;
    return (
      <li className="menu__category">
        <div onClick={onElemCkick} className="menu__category-item">
          <img
            src={item.img}
            alt={item.category}
            className="menu__category-img"
          />
          <p className="menu__category-text">{item.category}</p>
        </div>
      </li>
    );
  }
}

export default CategoryItem;
