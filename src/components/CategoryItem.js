import React, { Component } from "react";

class CategoryItem extends Component {
  render() {
    const { item, onElemCkick, activeCategory } = this.props;
    return (
      <li className="menu__category">
        <div onClick={onElemCkick} className="menu__category-item">
          <img
            src={item.img}
            alt={item.category}
            className="menu__category-img"
          />
          <p className={this.activeHandler(item.category, activeCategory)}>
            {item.category}
          </p>
        </div>
      </li>
    );
  }
  activeHandler = (category, activeCategory) => {
    let classTxt =
      category == activeCategory
        ? "menu__category-text active"
        : "menu__category-text";
    return classTxt;
  };
}

export default CategoryItem;
