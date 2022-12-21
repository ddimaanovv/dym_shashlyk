$(function () {
  // $(".courusel__inner").slick({
  //   infinite: true,
  //   autoplay: false,
  //   centerMode: true,
  //   dots: true,
  //   autoplaySpeed: 2000,
  //   arrows: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 950,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 380,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });

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
  $(".footer__date").text(new Date().getUTCFullYear());

  $(".header__btn-menu").on("click", function () {
    $(".header__menu").toggleClass("active");
  });
});
