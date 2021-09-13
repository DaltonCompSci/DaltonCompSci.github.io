$(document).ready(function() {
  $('.weather').click(function() {
    $.ajax({
      dataType: "jsonp",
      jsonpCallback: "",
      url: "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m",
      success: function(results) {
        $('.weatherdescriptor').text(results["temperature_2m"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
