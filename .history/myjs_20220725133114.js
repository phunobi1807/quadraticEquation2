// $(document).on("change", ".number", function () {
//   var sum = 0;
//   $(".number").each(function () {
//     sum += +$(this).val();
//   });
//   $(".total").val(sum);
// });
var x1, x2;
function calculate() {
  root = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
  console.log(root);
  x1 = (-b + root) / 2 * a;
  x2 = (-b - root) / 2 * a;
}

function renderResult() {
  $(".result")
    .html("")
    .append("first answer" + x1)
    .append("second answer" + x2);
}

$("#oke").on("click", function () {
  calculate();

  // Cái render giao diện tính sau nhé, giờ tính toán được đã
}); 