$(document).ready(function () {
  //display current day
  var day = moment().format("MMMM Do YYYY, h:mm:ss a");
  console.log(day);
  $("#currentDay").append(day);
  var time = parseInt(moment().format("HH"));
  

  //adding text var, corrected typo
  var $txt9 = $("#txt9");
  var $txt10 = $("#txt10");
  var $txt11 = $("#txt11");
  var $txt12 = $("#txt12");
  var $txt1 = $("#txt1");
  var $txt2 = $("#txt2");
  var $txt3 = $("#txt3");
  var $txt4 = $("#txt4");
  var $txt5 = $("#txt5");

  //colors

  $("textarea").each(function () {
    var name = parseInt($(this).attr("name"));
    if (name < time) {
      $(this).addClass("past");
    }

    if (name > time) {
      $(this).addClass("future");
    }

    if (name === time) {
      $(this).addClass("present");
    }
  });

  //event saved to local
  $("button").on("click", function () {
    localStorage.setItem("9AM", $txt9.val());
    localStorage.setItem("10AM", $txt10.val());
    localStorage.setItem("11AM", $txt11.val());
    localStorage.setItem("12PM", $txt12.val());
    localStorage.setItem("13PM", $txt1.val());
    localStorage.setItem("14PM", $txt2.val());
    localStorage.setItem("15PM", $txt3.val());
    localStorage.setItem("16PM", $txt4.val());
    localStorage.setItem("17PM", $txt5.val());
  });

  //event persists when saved
  $("#txt9").append(localStorage.getItem("9AM"));
  $("#txt10").append(localStorage.getItem("10AM"));
  $("#txt11").append(localStorage.getItem("11AM"));
  $("#txt12").append(localStorage.getItem("12PM"));
  $("#txt1").append(localStorage.getItem("13PM"));
  $("#txt2").append(localStorage.getItem("14PM"));
  $("#txt3").append(localStorage.getItem("15PM"));
  $("#txt4").append(localStorage.getItem("16PM"));
  $("#txt5").append(localStorage.getItem("17PM"));
});
