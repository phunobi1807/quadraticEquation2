$(document).on("change", ".number", function () {
  var sum = 0;
  $(".number1", ".number2", ".number3").each(function () {
    sum = number1 + number2 + number3;
  });
  $(".total").val(sum);
});
