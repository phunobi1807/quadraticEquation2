// $(document).on("change", ".number", function () {
//   var sum = 0;
//   $(".number").each(function () {
//     sum += +$(this).val();
//   });
//   $(".total").val(sum);
// });

/**
 * Tính phương trình bật 2 và trả ra kết quả
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} c 
 */
function quadraticEquation2(a,b,c) {
  // Tính biệt số theo như công thức
}

function renderResult() {
  $(".result")
    .html("")
    .append("first answer" + x1)
    .append("second answer" + x2);
}

$("#oke").on("click", function () {

  const a = parseFloat($("#a").val());
  const b = parseFloat($("#b").val());
  const c = parseFloat($("#c").val());

  quadraticEquation2(a,b,c);

  // Cái render giao diện tính sau nhé, giờ tính toán được đã
}); 