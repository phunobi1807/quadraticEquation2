$(document).on("change", ".number", function () {
  var sum = 0;
  $(".qty1").each(function () {
    sum += +$(this).val();
  });
  $(".total").val(sum);
});
