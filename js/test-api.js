$(document).ready(function() {
   
    
    $('#getD').click(function() {
      
        var lat = $('#lat').val();
        var lon = $('#lon').val();
        var apiKey = '0322ef11d2cadcd44625773b4c6a2427'; 
        $.ajax({
            
            url: 'https://api.openweathermap.org/data/2.5/weather',
            method: 'GET',
            dataType: 'json',
            data: {
                lat : lat,
                lon : lon,
                appid: apiKey,
                units: 'metric'
            },
            success: function(response) {
                var weatherResult = `
                    <h2>${response.name}, ${response.sys.country}</h2>
                    <p>Nhiệt độ: ${response.main.temp}°C</p>
                    <p>Thời tiết: ${response.weather[0].description}</p>
                    <p>Độ ẩm: ${response.main.humidity}%</p>
                    <p>Tốc độ gió: ${response.wind.speed} m/s</p>
                `;
                console.log(response);
                $('#result').html(weatherResult);
            },
            error: function(error) {
                $('#result').text('Error: ' + error);
            }
        });
    });
});

$(document).ready(function() {
    $('#getData').click(function(){
        var city = $('#city').val();
        var apiKey = 'b475a77ad1eee9360b814683bff76d02';
        const limit = 1;
        $.ajax({
            url: 'http://api.openweathermap.org/geo/1.0/direct',
            type: 'GET',
            data: {
                q: city,
                limit : limit,
                appid: apiKey,
                units: 'metric'
            },
            success: function(response) {
                // console.log(response);
                // resJson = JSON.stringify(response,null, 2);
                res = Object.values(response)[0];
               
                $('#lat').val(res.lat);
                $('#lon').val(res.lon);
            },
            error: function(error) {
                console.error('There was an error with the GET request:', error);
            }
        });
    });
    
    })
    