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
        units: "metric",
      },
      success: function (response) {
        console.log(response);
        // resJson = JSON.stringify(response, null, 2);
        res = Object.values(response)[0];

        $("#lat").val(res.lat);
        $("#lon").val(res.lon);
      },
      error: function (error) {
        console.error("There was an error with the GET request:", error);
      },
    });
  });
});

$(document).ready(function () {
    
  $("#getD").click(function () {
    var lat = $("#lat").val();
    var lon = $("#lon").val();
    var apiKey = "0322ef11d2cadcd44625773b4c6a2427";
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/forecast",
      method: "GET",
      dataType: "json",
      data: {
        lat: lat,
        lon: lon,
        appid: apiKey,
        units: "metric",
      },
      success: function (response) {
        console.log(typeof(response));
        const r = response.list[0];
        console.log(r.dt);
        var options = {
          timeZone: "Asia/Ho_Chi_Minh", // Đặt múi giờ Việt Nam
          weekday: 'long',
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        };
        
        var formatter = new Intl.DateTimeFormat("vi-VN", options);
        var time = new Date()
        var formattedDate = formatter.format(time);
        // var time = new Date(r.dt * 1000);
       
        console.log(time);
        
        console.log(formattedDate);
        console.log(response);
        console.log(r.weather);
        console.log(response.city.name);

        const iconCode = r.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

        $(".weather-icon").html(
          `<img src="${iconUrl}" alt="weather icon"> Thời tiết `
        );
        $(".dt").text(formattedDate);
        $(".name").text(response.city.name + "," + response.city.country);
        $(".doc").text("Nhiệt độ hiện tại: " + r.main.temp + "°C");
        $(".domax").text("Nhiệt độ cao nhất: " + r.main.temp_max + "°C");
        $(".domin").text("Nhiệt độ thấp nhất: " + r.main.temp_min + "°C");
        $(".doam").text("Độ ẩm: " + r.main.humidity + "%");
        $(".tamnhin").text("Tầm nhìn: " + r.visibility + "m");
        $(".gio").text("Tốc độ gió: " + r.wind.speed + "m/s");
        if (r.clouds > 50) {
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
    $("#mai").click(function () {
      var lat = $("#lat").val();
      var lon = $("#lon").val();
      var apiKey = "0322ef11d2cadcd44625773b4c6a2427";
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast",
        method: "GET",
        dataType: "json",
        data: {
          lat: lat,
          lon: lon,
          appid: apiKey,
          units: "metric",
        },
        success: function (response) {
          console.log(typeof(response));
          const r = response.list[5];
          console.log(r.dt);
          var options = {
            timeZone: "Asia/Ho_Chi_Minh", // Đặt múi giờ Việt Nam
            weekday: 'long',
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          };
          var time = new Date(r.dt * 1000);
          var formatter = new Intl.DateTimeFormat("vi-VN", options);
          var formattedDate = formatter.format(time);
        //   var dt = new Date(r.dt * 1000);
          console.log(formattedDate);
          console.log(response);
          console.log(r.weather);
          console.log(response.city.name);
  
          const iconCode = r.weather[0].icon;
          const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
  
          $(".weather-icon").html(
            `<img src="${iconUrl}" alt="weather icon"> Thời tiết `
          );
          $(".dt").text(formattedDate);
          $(".name").text(response.city.name + "," + response.city.country);
          $(".doc").text("");
          $(".domax").text("Nhiệt độ cao nhất: " + r.main.temp_max + "°C");
          $(".domin").text("Nhiệt độ thấp nhất: " + r.main.temp_min + "°C");
          $(".doam").text("Độ ẩm: " + r.main.humidity + "%");
          $(".tamnhin").text("Tầm nhìn: " + r.visibility + "m");
          $(".gio").text("Tốc độ gió: " + r.wind.speed + "m/s");
          if (r.clouds > 50) {
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
    $("#kia").click(function () {
      var lat = $("#lat").val();
      var lon = $("#lon").val();
      var apiKey = "0322ef11d2cadcd44625773b4c6a2427";
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast",
        method: "GET",
        dataType: "json",
        data: {
          lat: lat,
          lon: lon,
          appid: apiKey,
          units: "metric",
        },
        success: function (response) {
          console.log(typeof(response));
          const r = response.list[13];
          console.log(r.dt);
          var options = {
            timeZone: "Asia/Ho_Chi_Minh", // Đặt múi giờ Việt Nam
            weekday: 'long',
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          };
          var time = new Date(r.dt * 1000);
          var formatter = new Intl.DateTimeFormat("vi-VN", options);
          var formattedDate = formatter.format(time);
        //   var dt = new Date(r.dt * 1000);
          console.log(formattedDate);
          console.log(response);
          console.log(r.weather);
          console.log(response.city.name);
  
          const iconCode = r.weather[0].icon;
          const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
  
          $(".weather-icon").html(
            `<img src="${iconUrl}" alt="weather icon"> Thời tiết `
          );
          $(".dt").text(formattedDate);
          $(".name").text(response.city.name + "," + response.city.country);
          $(".doc").text("");
          $(".domax").text("Nhiệt độ cao nhất: " + r.main.temp_max + "°C");
          $(".domin").text("Nhiệt độ thấp nhất: " + r.main.temp_min + "°C");
          $(".doam").text("Độ ẩm: " + r.main.humidity + "%");
          $(".tamnhin").text("Tầm nhìn: " + r.visibility + "m");
          $(".gio").text("Tốc độ gió: " + r.wind.speed + "m/s");
          if (r.clouds > 50) {
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




// var dt = new Date(1661878800 * 1000); // Nhân với 1000 để đổi sang mili giây
// console.log(dt);
// //21.0278
// 105.8342
// 685e7fbaa0db2bdcec7c34003597dc27
// api.openweathermap.org/data/2.5/forecast
