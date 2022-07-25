$(document).ready(() => {
  // $(document).on("change", ".number", function () {
  //   var sum = 0;
  //   $(".number").each(function () {
  //     sum += +$(this).val();
  //   });
  //   $(".total").val(sum);
  // });

  
    @param {Number} a
    @param {Number} b
    @param {Number} c
   
  function quadraticEquation2(a, b, c) {
    let x1, x2;

    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {
      return false;
    } else if (delta === 0) {
      x1 = x2 = -((b / 2) * a);
      return {
        x1: x1,
        x2: x2,
      };
    } else {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return {
        x1: x1,
        x2: x2,
      };
    }
  }

  function renderResult(x1, x2) {
    $(".result")
      .html("")
      .append("NGHIỆM X1: " + x1 + "<br />")
      .append("NGHIỆM X2: " + x2 + "<br/ >");
  }

  function renderFalse() {
    $(".result")
      .html("Vô nghiệm")
  }

  $("#oke").on("click", function () {
    const a = parseFloat($("#a").val());
    const b = parseFloat($("#b").val());
    const c = parseFloat($("#c").val());

    const result = quadraticEquation2(a, b, c);

    if(result === false) {
      // Phương trình vô nghiệm
      renderFalse();
    } else {
      const {x1, x2} = result;
      // Nghiệm x1, x2
      renderResult(x1, x2);
    }

    console.log(result);

    // Cái render giao diện tính sau nhé, giờ tính toán được đã
  });
})