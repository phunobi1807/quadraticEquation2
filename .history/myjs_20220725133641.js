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
  // Tính biệt số (gọi là delta) theo như công thức
  // Math.pow đại diện cho n bình phương m (n^m)
  let x1, x2;

  const delta = Math.pow(b, 2) - 4 * a * c;

  if(delta < 0) {
    return false;
  }
  else if(delta === 0) {
    x1 = x2 = -(b / 2 * a);
    return {
      x1: x1,
      x2: x2,
    }
  } else {
    x1 = 0;
    x2 = 0;
    return {
      x1: 0,
      x2: 0,
    }
  }
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