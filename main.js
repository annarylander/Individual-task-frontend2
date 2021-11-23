$(document).ready(function () {
  //index

  $("#btn1").on("click", function () {
    $("#description1").toggle();
  });

  $("#btn2").on("click", function () {
    $("#description2").toggle();
  });

  $("#btn3").on("click", function () {
    $("#description3").toggle();
  });

  $("#btn4").on("click", function () {
    $("#description4").toggle();
  });

  $("#btn5").on("click", function () {
    $("#description5").toggle();
  });

  $("#btn6").on("click", function () {
    $("#description6").toggle();
  });

  //about-form
  $("#submit-button").on("click", function () {
    $(".event-form").hide();
    message.innerText =
      "Tack för ditt meddelande, vi återkopplar så fort vi kan!";
  });

  //about-contact-ceo
  $(function () {
    $("#emailLink").on("click", function (event) {
      event.preventDefault();
      var email = "test@evento.com";
      window.location = "mailto:" + email;
    });
  });

  //detail-images
  $("#detail-pic1").mouseenter(function () {
    $("#detail-pic1").animate({
      height: "198",
      width: "297px",
    });
  });

  $("#detail-pic1").mouseleave(function () {
    $("#detail-pic1").animate({
      height: "180",
      width: "270px",
    });
  });

  $("#detail-pic2").mouseenter(function () {
    $("#detail-pic2").animate({
      height: "198",
      width: "297px",
    });
  });

  $("#detail-pic2").mouseleave(function () {
    $("#detail-pic2").animate({
      height: "180",
      width: "270px",
    });
  });

  $("#detail-pic3").mouseenter(function () {
    $("#detail-pic3").animate({
      height: "198",
      width: "297px",
    });
  });

  $("#detail-pic3").mouseleave(function () {
    $("#detail-pic3").animate({
      height: "180",
      width: "270px",
    });
  });

  $("#detail-pic4").mouseenter(function () {
    $("#detail-pic4").animate({
      height: "198",
      width: "297px",
    });
  });

  $("#detail-pic4").mouseleave(function () {
    $("#detail-pic4").animate({
      height: "180",
      width: "270px",
    });
  });
});
