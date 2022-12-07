import React, { Component } from "react";

class BasketItem extends Component {
  render() {
    const { item, onMinusCkick, onPlusCkick, onCloseCkick } = this.props;
    return (
      <div class="basket__item">
        <div class="basket__item-img-wrapper">
          <img src="images/fish/1.png" alt="order" class="basket__item-img" />
        </div>
        <div class="basket__item-wrapper">
          <p class="basket__item-title">{item.title}</p>
          <div class="basket__item-btn-wrapper">
            <button class="basket__item-btn minus" onClick={onMinusCkick}>
              <svg width="10" height="10" viewBox="0 0 10 10" class="icon">
                <rect fill="#fff" y="4" width="10" height="2" rx="1"></rect>
              </svg>
            </button>
            <p class="basket__item-btn-count">{item.count}</p>
            <button class="basket__item-btn plus" onClick={onPlusCkick}>
              <svg width="10" height="10" viewBox="0 0 10 10" class="icon">
                <g fill="#fff">
                  <rect x="4" width="2" height="10" ry="1"></rect>
                  <rect y="4" width="10" height="2" rx="1"></rect>
                </g>
              </svg>
            </button>
          </div>
          <p class="basket__item-price">{item.count * item.price} p</p>
        </div>
        <button class="basket__item-del" onClick={onCloseCkick}>
          <svg
            class="basket__item-del-svg"
            width="14"
            height="14"
            viewBox="0 0 25 25"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    );
  }
}

export default BasketItem;
