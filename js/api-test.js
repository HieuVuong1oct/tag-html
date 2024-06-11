$(document).ready(function () {
  $("#getD").click(function () {
    var lat = $("#lat").text();
    var lon = $("#lon").text();
    var apiKey = "0322ef11d2cadcd44625773b4c6a2427";
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather",
      method: "GET",
      dataType: "json",
      data: {
        lat: lat,
        lon: lon,
        appid: apiKey,
        // units: "metric",
      },
      success: function (response) {
        console.log(response);
        const iconCode = response.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

        $(".weather-icon").html(
          `<img src="${iconUrl}" alt="weather icon"> Thời tiết hôm nay.`
        );
        $(".name").text(response.name + "," + response.sys.country);
        $(".doc").text("Nhiệt độ hiện tại: " + response.main.temp + "°C");
        $(".domax").text("Nhiệt độ cao nhất: " + response.main.temp_max + "°C");
        $(".domin").text(
          "Nhiệt độ thấp nhất: " + response.main.temp_min + "°C"
        );
        $(".doam").text("Độ ẩm: " + response.main.humidity + "%");
        $(".tamnhin").text("Tầm nhìn: " + response.visibility + "m");
        $(".gio").text("Tốc độ gió: " + response.wind.speed + "m/s");
        if (response.clouds > 50) {
          $(".may").text("Nhiều mây");
        } else {
          $(".may").text("Ít mây");
        }
      },
      error: function (error) {
        $("#result").text("Error: " + error);
      },
    });
  });
});

$(document).ready(function () {
  $("#getData").click(function () {
    var city = $("#city").val();
    var apiKey = "b475a77ad1eee9360b814683bff76d02";
    const limit = 1;
    $.ajax({
      url: "http://api.openweathermap.org/geo/1.0/direct",
      type: "GET",
      data: {
        q: city,
        limit: limit,
        appid: apiKey,
        // units: "metric",
      },
      success: function (response) {
        console.log(response);
        // resJson = JSON.stringify(response, null, 2);
        res = Object.values(response)[0];

        $("#lat").text(res.lat);
        $("#lon").text(res.lon);
      },
      error: function (error) {
        console.error("There was an error with the GET request:", error);
      },
    });
  });
});
