$(document).ready(function() {
  $("#js-click").click(function() {
    $("#js-def-hidden").toggle();
    $("#js-click").show();
  });
  $("#op-click").click(function() {
    $("#op-def-hidden").toggle();
    $("#op-click").show();
  });
  $("#variables-click").click(function() {
    $("#var-def-hidden").toggle();
    $("#variables-click").show();
  });
  $("#naming-click").click(function() {
    $("#name-def-hidden").toggle();
    $("#naming-click").show();
  });
});
