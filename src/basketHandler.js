export default function basketHandler() {
  let basket_btn = document.querySelector(".basket-btn");
  basket_btn.addEventListener("click", basketHandler);

  function basketHandler() {
    document.querySelector(".basket__bg").classList.add("active");
    document.querySelector(".basket__inner").classList.add("active");
  }

  let basket_bg = document.querySelector(".basket__bg");
  basket_bg.addEventListener("click", basketBgHandler);

  let basket_close_btn = document.querySelector(".basket__close-btn");
  basket_close_btn.addEventListener("click", basketBgHandler);

  let basket__inner = document.querySelector(".basket__inner");

  function basketBgHandler() {
    basket_bg.classList.add("not-active");
    basket__inner.classList.remove("active");
    setTimeout(function () {
      basket_bg.classList.remove("active", "not-active");
    }, 500);
  }
  let date = new Date();
  let min = date.getMinutes();
  let hour = date.getHours();
  let count_date;

  if (min > 30) {
    if (min < 45) {
      min = 30;
      hour += 1;
      count_date = 22 - hour;
    } else {
      min = 0;
      hour += 2;
      count_date = 22 - hour;
    }
  } else {
    if (min < 15) {
      min = 0;
      hour += 1;
      count_date = 22 - hour;
    } else {
      min = 30;
      hour += 1;
      count_date = 22 - hour;
    }
  }

  if (hour > 21 || hour < 8) {
    hour = 8;
    min = 0;
    count_date = 22 - hour;
  }

  let i = 0;

  while (i <= count_date) {
    let button_date = create_button_date();
    if (min == 0) {
      button_date.innerText = hour + i + ":00";
      let button_date2 = create_button_date();
      button_date2.innerText = hour + i + ":30";
    }
    if (min == 30) {
      button_date.innerText = hour + i + ":30";
      min = 0;
    }
    i++;
  }

  function create_button_date() {
    let parent = document.querySelector(".basket__form-time");
    let button_date = document.createElement("button");
    button_date.type = "button";
    button_date.classList.add("basket__delivery-time");
    parent.append(button_date);
    return button_date;
  }

  let blockButtonDates = document.querySelector(".basket__form-time");
  blockButtonDates.addEventListener("click", blockTimesHandler);
  function blockTimesHandler(e) {
    document.querySelectorAll(".basket__delivery-time").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  }
}
