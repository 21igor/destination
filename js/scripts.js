$(document).ready(function() {
  $("form#dest").submit(function() {

    var name = $("input#name").val();
    var date = $("#date").val();
    var duration = $("input#duration").val();
    var activities = $("#activities").val();
    var packages = $("input:radio[name=packages]:checked").val();

    $(".name").text(name);
    $(".date").text(date);
    $(".duration").text(duration);
    $(".activities").text(activities);
    $(".packages").text(packages);

    $("section").show();

    $("#usa").hide();
    $("#northam").hide();
    $("#europe").hide();
    $("#asia").hide();
    $("#world").hide();

    if (duration >= 1 && duration < 6) {
      $("#usa").show();
    }
    else if (duration >= 6 && duration < 10) {
      $("#northam").show();
    }
    else if ((duration >= 10 && duration < 20) ) {
      $("#europe").show();
    }
    else if ((duration >=20 && duration < 30) ) {
      $("#asia").show();
    }
    else if ((duration >= 30) ) {
      $("#world").show();
    }
    else {
      alert("Earn some money and come back!")
    }



    event.preventDefault();

  });
});
