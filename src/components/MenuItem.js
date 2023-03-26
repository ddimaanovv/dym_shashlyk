import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    const { item, onMinusCkick, onPlusCkick, onElemCkick } = this.props;
    return (
      <div className="menu__item">
        <img src={item.img} alt="fish" className="menu__item-img" />
        <h3 className="menu__item-title">{item.title}</h3>
        <p className="menu__item-tochka">{item.tochka}</p>
        <div className="menu__item-price">
          <p className="menu__item-price-weight">{item.weight}</p>
          <p className="menu__item-price-cost">{item.price}р</p>
        </div>
        <div className="menu__item-btn">
          <p className={this.menuBtnBasket(item)} onClick={onElemCkick}>
            В КОРЗИНУ
          </p>
          <div className={this.menuBtnBasketAdd(item)}>
            <button className="menu__item-btn-add minus" onClick={onMinusCkick}>
              <svg width="10" height="10" viewBox="0 0 10 10" className="icon">
                <rect fill="#fff" y="4" width="10" height="2" rx="1"></rect>
              </svg>
            </button>
            <p className="menu__item-btn-count">{item.count}</p>
            <button className="menu__item-btn-add plus" onClick={onPlusCkick}>
              <svg width="10" height="10" viewBox="0 0 10 10" className="icon">
                <g fill="#fff">
                  <rect x="4" width="2" height="10" ry="1"></rect>
                  <rect y="4" width="10" height="2" rx="1"></rect>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
  menuBtnBasket = (item) => {
    return item.count > 0
      ? "menu__item-btn-text disable"
      : "menu__item-btn-text";
  };
  menuBtnBasketAdd = (item) => {
    return item.count > 0
      ? "menu__item-btn-wrapper"
      : "menu__item-btn-wrapper disable";
  };
}

export default MenuItem;
