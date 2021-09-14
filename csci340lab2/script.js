$(document).ready(function() {
  $('.weather').click(function() {
    hotorcold = 0;
    $.ajax({
      dataType: "json",
      url: "https://api.open-meteo.com/v1/forecast?latitude=29.76&longitude=-95.36&hourly=temperature_2m",
      success: function(results) {
        $('.Sunday').text(results["hourly"]["temperature_2m"][12]);
        $('.Monday').text(results["hourly"]["temperature_2m"][36]);
        $('.Tuesday').text(results["hourly"]["temperature_2m"][60]);
        $('.Wednesday').text(results["hourly"]["temperature_2m"][84]);
        $('.Thursday').text(results["hourly"]["temperature_2m"][108]);
        $('.Friday').text(results["hourly"]["temperature_2m"][120]);
        $('.Saturday').text(results["hourly"]["temperature_2m"][132]);

        console.log(results["hourly"]["temperature_2m"][12]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
$(document).ready(function() {
  $('.games').click(function() {
    random = myFunction();
    $.ajax({
      dataType: "json",
      url: "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15",
      success: function(results) {

        $('.gamedesc').text(results[random]["title"]);
        $('.gamesale').text(results[random]["salePrice"]);

        console.log(results[random]["internalName"]);
        console.log(results[random]["salePrice"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
