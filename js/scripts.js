$(document).ready(function() {
  $("form#dest").submit(function() {
    // debugger
    var name = $("input#name").val();
    var date = $("#date").val();
    var duration = parseInt($("input#duration").val());
    var activities = parseInt($("#activities").val());
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

    var count = duration + activities

    if (count >= 101 && count < 130) {
      $("#usa").show();
    }
    else if (count >= 201 && count < 230) {
      $("#northam").show();
    }
    else if ((count >= 301 && count < 330) ) {
      $("#europe").show();
    }
    else if ((count >=301 && count < 330) ) {
      $("#asia").show();
    }
    else if ((count >= 330) ) {
      $("#world").show();
    }
    else {
      alert("Please enter the duration of your stay!")
    }

    event.preventDefault();

  });
});
