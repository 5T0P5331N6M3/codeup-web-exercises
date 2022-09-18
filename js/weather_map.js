"use strict";

mapboxgl.accessToken = MAPBOX_TOKEN;
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-streets-v11",
    // minZoom: 10,
    // maxZoom: 18,
    center: [-97.133068, 33.2148412],
    zoom: 16.5,
    // scrollZoom: false
});

<!-- Map Rotate: UnComment Under Button Click Event Marker -->
function rotate() {
    map.easeTo({bearing: 40, duration: 10000, pitch: 0, zoom: 18});
    window.setTimeout(() => {
        map.easeTo({bearing: 180, duration: 10000, pitch: 0, zoom: 14});
        window.setTimeout(() => {
            map.easeTo({bearing: 270, duration: 10000, pitch: 0, zoom: 16});
            window.setTimeout(() => {
                rotate();
            }, 10000);
        }, 10000);
    }, 10000);
    map.on("load", () => {
        rotate();
    });
}

<!-- User Map Click Event for Marker Drop -->
map.on('click', function add_marker(event) {
    console.log(event);
    let coordinates = event.lngLat;
    console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat), 'id', event.id;
    const marker = new mapboxgl.Marker({draggable: true})
        .setLngLat([coordinates.lng, coordinates.lat])
        .addTo(map);

    <!-- Weather AJAX -->
    $.get('https://api.openweathermap.org/data/2.5/forecast', {
        appid: OPEN_WEATHER_APPID,
        lat: coordinates.lat,
        lon: coordinates.lng,
        units: 'imperial'
    }).done(function (data) {
        console.log(data.list[0].main.temp_max);
        dailyForecast(data);
    }).fail(function (error) {
        console.log(error);
    });

});

<!-- Button Click Event -->
$(".btn").on("click", function () {
    let place = $("#current-location").val();
    $("#current-city").html(`<span>${place}</span>`);
    geocode(place, MAPBOX_TOKEN).then(function (result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(15);

        let lng = result[0];
        let lat = result[1];

        <!-- PopUp -->
        // let popup = new mapboxgl.Popup({offest: 25})
        //     .setText();

        <!-- Marker -->
        const marker = new mapboxgl.Marker({draggable: true})
            .setLngLat([lng, lat])
            // .setPopup(popup)
            .addTo(map);

        <!-- Reverse GeoCode for Button-->
        reverseGeocode({lng: lng, lat: lat}, MAPBOX_TOKEN).then(function (result) {
            let string = result.split(",");
            $("#current-city").html(string[1]);
            console.log(string[1]);
            console.log(result);

            <!-- UnComment for Map Rotation -->
            // rotate();

            <!-- Weather AJAX -->
            $.get('https://api.openweathermap.org/data/2.5/forecast', {
                appid: OPEN_WEATHER_APPID,
                lat: lat,
                lon: lng,
                units: 'imperial'
            }).done(function (data) {
                console.log(data);
                dailyForecast(data);

            }).fail(function (error) {
                console.log(error);
            });
        });

        function onDragEnd() {
            const lngLat = marker.getLngLat();
            coordinates.style.display = "block";
            coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
            $.get('https://api.openweathermap.org/data/2.5/forecast', {
                appid: OPEN_WEATHER_APPID,
                lat: lngLat.lat,
                lon: lngLat.lng,
                units: 'imperial'
            }).done(function (data) {
                console.log(data);

            }).fail(function (error) {
                console.log(error);
            });
        }

        marker.on("dragend", onDragEnd);
    });


});

<!-- Weather API Get Data for 5-Day Weather Cards-->
function dailyForecast(data) {
    let html = "";
    // let temp = "";
    let temp_min = "";
    let temp_max = "";
    let description = "";
    let humidity = "";
    let pressure = "";
    let icon = "";
    let dateTime = "";
    let windSpeed = "";


    for (let i = 0; i <= 40; i += 9) {
        // temp = data[i].main.temp;
        description = data.list[i].weather[0].description;
        humidity = data.list[i].main.humidity;
        pressure = data.list[i].main.pressure;
        temp_max = data.list[i].main.temp_max;
        temp_min = data.list[i].main.temp_min;
        icon = data.list[i].weather[0].icon;
        dateTime = data.list[i].dt_txt;
        windSpeed = data.list[i].wind.speed;
        //
        //
        // console.log(temp);
        console.log(humidity);
        console.log(description);
        console.log(pressure);
        console.log(temp_max);
        console.log(temp_min);
        console.log(icon);
        console.log(dateTime);
        console.log(windSpeed);

        html += "<section class=\"card1\">\n" +
            "            <header class=\"day1\">\n" +
            "                <h4 class=\"day-date\"></h4>\n" +
            "            </header>\n" +
            "            <div class=\"day-info\">\n" +
            "                <p class=\"temp\">" + "Max Temp: " + temp_max + " <br/> " + " <br/> " + "Min Temp: " + temp_min + "</p>\n" +
            "                <img src=\"https://openweathermap.org/img/w/" + icon + ".png\" alt=\"\">\n" +
            "                <hr>\n" +
            "                <div class=\"card-section\">\n" +
            "                    <p class=\"description\">Description: " + description + "</p>\n" +
            "                    <p class=\"humidity\">Humidity: " + humidity + "</p>\n" +
            "                    <hr>\n" +
            "                    <p class=\"wind\">Wind: " + windSpeed + "</p>\n" +
            "                    <hr>\n" +
            "                    <p class=\"pressure\">Pressure: " + pressure + "</p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </section>"
    }

    $('.cards').html(html);
}

<!-- Add PopUps for nearest golf courses after Map Click Event/Button Event -->
//  See: https://maplibre.org/maplibre-gl-js-docs/example/set-popup/

<!-- Add Custom Icons -->
   // https://maplibre.org/maplibre-gl-js-docs/example/custom-marker-icons/