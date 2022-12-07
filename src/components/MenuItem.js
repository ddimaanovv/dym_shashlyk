import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    const { item, onElemCkick } = this.props;
    return (
      <div className="menu__item">
        <img src={item.img} alt="fish" className="menu__item-img" />
        <h3 className="menu__item-title">{item.title}</h3>
        <p className="menu__item-price">{item.price}</p>
        <button className="menu__item-btn" onClick={onElemCkick}>
          В КОРЗИНУ
        </button>
      </div>
    );
  }
}

export default MenuItem;
