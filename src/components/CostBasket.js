import React, { Component } from "react";

class CostBasket extends Component {
  render() {
    const { mass } = this.props;
    const cost = this.costBasket(mass);
    return (
      <div>
        <p class="basket__delivery-title">Информация по доставке</p>
        <div class="basket__delivery-info">
          {/* <p class="basket__delivery-count">
            <span> 6 </span> позиций
          </p> */}
          <div class="basket__delivery-sum">
            <p class="basket__delivery-sum-title">Сумма заказа</p>
            <p class="basket__delivery-sum-count">
              <span>{cost}</span> Р
            </p>
          </div>
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
