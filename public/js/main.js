$(function () {
  $(".courusel__inner").slick({
    infinite: true,
    autoplay: false,
    centerMode: true,
    dots: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".courusel__galery").slick({
    infinite: true,
    autoplay: false,
    centerMode: true,
    dots: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".courusel__reviews").slick({
    infinite: true,
    autoplay: false,
    centerMode: true,
    dots: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".header__btn-menu").on("click", function () {
    $(".header__menu").toggleClass("active");
  });

  // var $address = $('[name="adress_name"]');
  // $address.fias({
  //   oneString: true,
  // });
});

// let basket_btn = document.querySelector(".basket-btn");
// basket_btn.addEventListener("click", basketHandler);

// let basket_bg = document.querySelector(".basket__bg");
// basket_bg.addEventListener("click", basketBgHandler);

// let basket_close_btn = document.querySelector(".basket__close-btn");
// basket_close_btn.addEventListener("click", basketBgHandler);

// let basket__inner = document.querySelector(".basket__inner");

// function basketHandler() {
//   document.querySelector(".basket__bg").classList.add("active");
//   document.querySelector(".basket__inner").classList.add("active");
// }

// function basketBgHandler() {
//   basket_bg.classList.add("not-active");
//   basket__inner.classList.remove("active");
//   setTimeout(function () {
//     basket_bg.classList.remove("active", "not-active");
//   }, 500);
// }

// document
//   .querySelector(".header .header__menu")
//   .addEventListener("swiped-up", function (e) {
//     console.log(123);
//     e.target.classList.toggleClass("active");
//   });

// let date = new Date();
// let min = date.getMinutes();
// let hour = date.getHours();
// let count_date;

// if (min > 30) {
//   if (min < 45) {
//     min = 30;
//     hour += 1;
//     count_date = 22 - hour;
//   } else {
//     min = 0;
//     hour += 2;
//     count_date = 22 - hour;
//   }
// } else {
//   if (min < 15) {
//     min = 0;
//     hour += 1;
//     count_date = 22 - hour;
//   } else {
//     min = 30;
//     hour += 1;
//     count_date = 22 - hour;
//   }
// }

// if (hour > 21 || hour < 8) {
//   hour = 8;
//   min = 0;
//   count_date = 22 - hour;
// }

// let i = 0;

// while (i <= count_date) {
//   let button_date = create_button_date();
//   if (min == 0) {
//     button_date.innerText = hour + i + ":00";
//     let button_date2 = create_button_date();
//     button_date2.innerText = hour + i + ":30";
//   }
//   if (min == 30) {
//     button_date.innerText = hour + i + ":30";
//     min = 0;
//   }
//   i++;
// }

// function create_button_date() {
//   let parent = document.querySelector(".basket__form-time");
//   let button_date = document.createElement("button");
//   button_date.type = "button";
//   button_date.classList.add("basket__delivery-time");
//   parent.append(button_date);
//   return button_date;
// }
