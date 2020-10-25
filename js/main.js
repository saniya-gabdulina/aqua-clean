$(document).ready(function () {
  $(".consist-slide").slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    swipe: false,
    adaptiveHeight: true
  });

  $(".room__item").click(function () {
    var target = Number($(this).attr("data-target"));
    $(".consist-slide").slick("slickGoTo", target, false);
  });

  // Диалоговое окно
  $(".popup-modal__button").magnificPopup({
    type: "inline",
    preloader: false,
    modal: true,
  });
  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  var types = {
    afterRepair: [
      "Очистка стен от мелкодисперсной пыли",
      "Обеспыливание стен, потолка, мебели и фурнитуры",
      "Сухая и влажная уборка всех поверхностей, внешних фасадов, бытовой техники, мебели",
      "Протираем корпусную мебель снаружи и внутри (если они пустые)",
      "Удаление следов цемента, шпаклевки, затирки, бетона и различных растворов",
      "Очистка поверхностей от мелких строительных отходов и мусора",
      "Мытье плинтусов и пола от различных загрязнений",
      "Удаляем пыль и загрязнения с радиаторов и подоконников",
      "Протираем все осветительные приборы, бра, люстры, торшеры",
      "Чистим стеклянные и зеркальные поверхности",
      "Протираем и обеспыливаем двери, проемы, фурнитуру, розетки, выключатели",
      "Моем столешницу, вытяжку, кухонный фартук",
      "Удаляем грязь и строительный мусор из трудно доступных мест",
      "Распаковка бытовой техники, мебели, аккуратно снимем защитную пленку и все протрем (при необходимости)",
      "Моем сантехнику, душевую кабину, ванную",
      "Протираем плитку",
      "Пылесосим, влажная уборка плинтусов и пола",
    ],
    general: [
      "Протираем все доступные внешние поверхности",
      "Отодвигаем мебель и протираем под ней",
      "Протираем мебель снаружи и внутри",
      "Чистим зеркала и стеклянные поверхности",
      "Пылесосим мягкую мебель",
      "Моем осветительные приборы (торшеры, бра, напольные люстры)",
      "Обеспыливаем стены и радиаторы",
      "Моем плинтуса и пол",
      "Убираем пыль с бытовых приборов и предметов интерьера",
      "Складываем одежду ",
      "Застилаем кровать и меняем постельном белье (по желанию клиента)",
      "Моем дверные блоки( дверь, наличники, замки)",
      "Моем ванную, душевую кабину, раковину",
      "Чистим кафель на полу и стенах",
      "Чистим и дезинфицируем сантехнику",
      "Моем труднодоступные места",
      "Моем и чистим снаружи и внутри кухонную технику",
      "Моем и обезжириваем фартук, столешницу",
      "Моем раковину, посуду в ней, смеситель",
    ],
    standart: [
      "Протираем доступные повехности",
      "Очищаем заркала и стеклянные поверхности",
      "Складываем вещи",
      "Заправляем кровати, меняем постельное белье (по желанию клиента)",
      "Делаем влажную и сухую протирку техники",
      "Чистим и дезинфицируем сантехнику",
      "Моем посуду и раковину",
      "Моем ванну и душевую кабину",
      "Моем полы и плинтуса",
      "Пылесосим ковры и коврики",
    ],
  };

  types.standart.forEach(function (item) {
    var typeLIstItem = document.createElement("li");
    typeLIstItem.classList.add("type-list__item");
    typeLIstItem.innerText = item;
    document
      .querySelector("#types__modal-standart .type-list")
      .appendChild(typeLIstItem);
  });

  types.general.forEach(function (item) {
    var typeLIstItem = document.createElement("li");
    typeLIstItem.classList.add("type-list__item");
    typeLIstItem.innerText = item;
    document
      .querySelector("#types__modal-general .type-list")
      .appendChild(typeLIstItem);
  });

  types.afterRepair.forEach(function (item) {
    var typeLIstItem = document.createElement("li");
    typeLIstItem.classList.add("type-list__item");
    typeLIstItem.innerText = item;
    document
      .querySelector("#types__modal-afterRepair .type-list")
      .appendChild(typeLIstItem);
  });

  // попап с подробным types окно
  $(".popup-modal__button").magnificPopup({
    type: "inline",
    preloader: false,
    modal: true,
  });
  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  //types slider
  $(".types-slider").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          slidesToShow: 2
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1
        },
      },
    ],
  });
  //reviews slider
  $(".reviews-slider").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          slidesToShow: 2
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1
        },
      },
    ],
  });

  $('.discount__form').validate ({
    errorClass: "invalid" ,
    rules: {
      userPhone: {
        required: true,
          minlength: 17,
          maxlength: 17
      }
    },
    messages: {
      userPhone: {
        required: "Укажите номер" 
      }
    }
  })
  
});
