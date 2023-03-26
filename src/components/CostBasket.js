import React, { Component } from "react";

class CostBasket extends Component {
  render() {
    const { mass } = this.props;
    const cost = this.costBasket(mass);
    return (
      <div>
        <div className="basket__delivery-info">
          <div className="basket__delivery-sum">
            <p className="basket__delivery-sum-title">Сумма заказа</p>
            <p className="basket__delivery-sum-count">
              <span>{cost}</span> Р
            </p>
          </div>
          <p className="basket__delivery-info-subtitle">Без учета доставки</p>
        </div>
      </div>
    );
  }
  costBasket = (mass) => {
    let cost = 0;
    for (let item of mass) {
      cost += +item.price * +item.count;
    }
    return cost;
  };
}

export default CostBasket;
