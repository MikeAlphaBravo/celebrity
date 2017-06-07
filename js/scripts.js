$(document).ready(function() {
  $("div .radio").click(function(){
    $(".low").hide();
    $(".mid").hide();
    $(".midHigh").hide();
    $(".high").hide();
  })
  $("#dating form").submit(function(event) {
    var answerOne = parseInt($("input:radio[name=Q1]checked").val());
    var answerTwo = parseInt($("input:radio[name=Q2]checked").val());
    var answerThree = parseInt($("input:radio[name=Q3]checked").val());

    var answerTotal = answerOne + answerTwo + answerThree;

    if (answerTotal < 4) {
      $(".low").show();
    } else if (answerTotal > 4 && answerTotal < 8) {
      $(".mid").show();
    } else if (answerTotal > 8 && answerTotal < 10) {
      $(".midHigh").show();
    } else if (answerTotal > 11) {
      $(".high").show();
    }

  event.preventDefault();
  });
});
