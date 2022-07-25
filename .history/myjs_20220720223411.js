$(document).ready(function () {
        var popular = [
            "USD", "EUR", "RUB", "JPY", "GBP", "VND",
        ];
        $("#currency-widget").currency({
            fromPopular: popular,
            toPopular: popular,
            from: "USD",
            to: "VND",
        });
});
