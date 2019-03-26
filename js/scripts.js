$(document).ready(function() {
  $("#js-click").click(function() {
    $("#js-click").toggle();
    $("#js-def").toggle();
  });
  $("#js-def").click(function() {
    $("#js-def").toggle();
    $("#js-click").toggle();
  });
});
