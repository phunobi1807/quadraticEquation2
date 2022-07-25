
 $(document).ready(function () {
   var popular = ["USD", "EUR", "RUB", "JPY", "GBP"];

   $("#currency-widget").currency({
     fromPopular: popular,
     toPopular: popular,
     from: "USD",
     to: "EUR",
   });
 });
});
