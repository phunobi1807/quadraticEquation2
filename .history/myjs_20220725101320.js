$(document).on("change", ".qty1", function () {
  var sum = 0;
  $(".qty1").each(function () {
    sum += +$(this).val();
  });
  $(".total").val(sum);
});
