$(document).on("change", ".number", function () {
  var sum = 0;
  $(".number").each(function () {
    sum += $(this).val();
  });
  $(".total").val(sum);
});
