import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import MenuItem from "./components/MenuItem";
import CategoryItem from "./components/CategoryItem";
//import massItem from "./massItem.json";
import massCategoryItem from "./massCategoryItem";
import basketHandler from "./basketHandler";
import BasketItem from "./components/BasketItem";
import CostBasket from "./components/CostBasket";
import sendToBot from "./components/bot";

let basketForOrder = [];

let massItem = []

class App extends Component {
  state = {
    massMenuItem: [],
    massMenuCategory: massCategoryItem,
    massBasketElem: [],
    activeCategory: massCategoryItem[0].category,
  };

  render() {
    const menuItemElement = this.state.massMenuItem.map((item) => (
      <MenuItem
        key={item.id}
        item={item}
        onElemCkick={this.menuItemHandler.bind(this, item)}
        onMinusCkick={this.menuMinusHandler.bind(this, item)}
        onPlusCkick={this.menuItemHandler.bind(this, item)}
      />
    ));
    const menuCategoryItem = this.state.massMenuCategory.map((item) => (
      <CategoryItem
        key={item.id}
        item={item}
        onElemCkick={this.categoryClickHandler.bind(this, item.category)}
        activeCategory={this.state.activeCategory}
      />
    ));
    const basketElement = this.state.massBasketElem.map((item) => (
      <BasketItem
        key={item.id}
        item={item}
        onPlusCkick={this.menuItemHandler.bind(this, item)}
        onMinusCkick={this.menuMinusHandler.bind(this, item)}
        onCloseCkick={this.menuCloseHandler.bind(this, item)}
      />
    ));

    return (
      <div>
        <div className="container">
          <div className="basket-btn">
            <img
              className="basket-btn__inner"
              src="images/icons/basket.svg"
              alt="basket"
            />
            <div className="basket__count-items">
              <p className="basket__count-text">{this.countBasket()}</p>
            </div>
          </div>
          <div className="menu__title">
            <p className="title-text">МЕНЮ</p>
          </div>
          <div className="menu__content">
            <nav className="menu__menu">
              <ul className="menu__categories">{menuCategoryItem}</ul>
            </nav>
            <div className="menu__items">{menuItemElement}</div>
          </div>
        </div>
        <section className="basket">
          <div className="basket__bg"></div>
          <div className="basket__inner">
            <div className="basket__header">
              <p className="basket__title">КОРЗИНА</p>
              <button className="basket__close-btn">
                ЗАКРЫТЬ&#160;
                <svg width="15" height="15" viewBox="0 0 25 25" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z"
                    fill="#fff"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="basket__items">{basketElement}</div>
            <div className="basket__delivery">
              <CostBasket mass={this.state.massBasketElem} />
            </div>
            <form className="basket__form">
              <div className="basket__form-adress field">
                <label>При самовывозе в поле адрес укажите один из вариантов:<br/>&nbsp;</label>
                <label>- Самовывоз на Мельникова 2Б</label>
                <label>- Самовывоз на Юбилейный 51<br/>&nbsp;</label>
                <label htmlFor="adress">Адрес:</label>
                <input
                  type="text"
                  id="adress"
                  name="adress_name"
                  defaultValue=""
                  required
                />
              </div>
              <div className="basket__form-tel">
                <label htmlFor="telefon">
                  Телефон (через +7 без пробелов):
                </label>
                <input
                  defaultValue="+7"
                  type="text"
                  id="telefon"
                  name="telefon_name"
                  required
                  pattern="\+7[0-9]{10}"
                />
              </div>
              <div className="basket__form-time">
                <label>Привести к:</label>
                <button type="button" className="basket__delivery-time active">
                  как можно скорее
                </button>
              </div>
              <div className="basket__form-button">
                <button type="submit" onClick={this.orderHandler()}>
                  Оформить заказ
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
  orderHandler = () => {
    basketForOrder = this.state.massBasketElem;
  };

  countBasket = () => {
    let count = 0;
    for (let item of this.state.massBasketElem) {
      count += +item.count;
    }
    return count;
  };

  categoryClickHandler = (category) => {
    this.setState({
      massMenuItem: massItem.filter((item) => item.category == category),
      activeCategory: category,
    });
  };

  menuItemHandler = (item) => {
    let mass = this.state.massBasketElem;
    let index = this.state.massBasketElem.indexOf(item);
    item.count += 1;
    if (index !== -1) {
      mass[index] = item;
      this.setState({
        massBasketElem: mass,
      });
    } else {
      this.setState({
        massBasketElem: [...this.state.massBasketElem, item],
      });
    }
  };

  menuMinusHandler = (item) => {
    let mass = this.state.massBasketElem;
    let index = mass.indexOf(item);
    item.count -= 1;
    if (item.count == 0) {
      mass.splice(index, 1);
    } else {
      mass[index] = item;
    }
    this.setState({
      massBasketElem: mass,
    });
  };

  menuCloseHandler = (item) => {
    let mass = this.state.massBasketElem;
    let index = this.state.massBasketElem.indexOf(item);
    item.count = 0;
    mass.splice(index, 1);
    this.setState({
      massBasketElem: mass,
    });
  };

  componentDidMount() {
    basketHandler();
    let applicantForm = document.querySelector(".basket__form");
    applicantForm.addEventListener("submit", handleFormSubmit);
    let getData = async () =>  {
      let response = await fetch(`https://648a28de5fa58521cab0f109.mockapi.io/dimShashlik`)
      massItem = await response.json();
      this.setState({
        massMenuItem: massItem.filter(
          (item) => item.category === massItem[0].category
        ),
      });

    }
    getData()
  }
}

const root = ReactDOM.createRoot(document.getElementById("menu"));
root.render(<App />);

function handleFormSubmit(event) {
  event.preventDefault();
  if (basketForOrder.length == 0) {
    return 0;
  }

  let infoDeliveri = {
    adress: document.getElementById("adress").value,
    mobile: document.getElementById("telefon").value,
    time: document.getElementsByClassName("basket__delivery-time active")[0]
      .textContent,
  };

  let orderToJSON = {
    Products: basketForOrder,
    Data: infoDeliveri,
  };

  sendToBot(orderToJSON).then((result) => showOrderId(result));
}

function showOrderId(result) {
  let basket_bg = document.querySelector(".basket__bg");
  basket_bg.classList.remove("active", "not-active");
  let basket__inner = document.querySelector(".basket__inner");
  basket__inner.classList.remove("active");

  let orderdisplay = document.querySelector(".orderinfo");
  orderdisplay.classList.toggle("show");

  let idText = document.querySelector(".orderinfo__textsmall span");
  idText.innerHTML = result.ID;

  let closeBtn = document.querySelector(".orderinfo__block svg");
  closeBtn.addEventListener("click", closeBtnHandler);

  let successBtn = document.querySelector(".orderinfo__blockid img");
  successBtn.addEventListener("click", closeBtnHandler);

  function closeBtnHandler() {
    window.location.reload();
  }
}
