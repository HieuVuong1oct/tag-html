$(document).ready(function() {
    $('#weather-form').on('submit', function(event) {
        event.preventDefault();
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
            success: function(data) {
                var weatherResult = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Nhiệt độ: ${data.main.temp}°C</p>
                    <p>Thời tiết: ${data.weather[0].description}</p>
                    <p>Độ ẩm: ${data.main.humidity}%</p>
                    <p>Tốc độ gió: ${data.wind.speed} m/s</p>
                `;
                $('#weather-result').html(weatherResult);
            },
            error: function(error) {
                $('#weather-result').html('<p>Không tìm thấy thông tin thời tiết cho thành phố này. Vui lòng thử lại.</p>');
            }
        });
    });
});
// "lat": 21.0294498,
// "lon": 105.8544441,
// 0322ef11d2cadcd44625773b4c6a2427