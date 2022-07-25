// $(document).on("change", ".number", function () {
//   var sum = 0;
//   $(".number").each(function () {
//     sum += +$(this).val();
//   });
//   $(".total").val(sum);
// });
var x1, x2;
function calculate() {
  a = parseFloat($("#a").val());
  b = parseFloat($("#b").val());
  c = parseFloat($("#c").val());

  root = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
  console.log(root);
  x1 = (-b + root) / 2 * a;
  x2 = (-b - root) / 2 * a;
  return calculate();
}

$("#oke").on("click", function () {
  calculate();
  $(".result")
    .html("")
    .append("first answer" + x1)
    .append("second answer" + x2);
}); 