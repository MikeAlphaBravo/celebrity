$(document).ready(function() {
  $("form#dating").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var preference = $("input:radio[name=preference]:checked").val();

    if (age) {
      var match = (100 - age) * 3;
      if (gender === 'male' && age >= 20) {
      }

      $("#celebrity").empty().append(match);
      $('#match').show();
}
    event.preventDefault();
  });
});
