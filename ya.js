ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.926769, 37.709399]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Bitcoin Карта России (на базе Яндекса)',
                hintContent: 'Купить и продать биткойны за наличные'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([55.897827, 37.388039], {
            balloonContent: '<p><b>Bitcoin 24</b> - Покупка и продажа биткойнов за наличные.<br>'+
      'RUB: от 100,000 рублей<br>USD: от $5,000<br>EUR: от €5,000<br><img src="https://cdn0.iconfinder.com/data/icons/simple-seo-and-internet-icons/512/location_oplimization-512.png" width="32" height="32"><b>Проверенный трейдер (Verified trader)</b><br><a href="skype:Lax0033?add">Skype</a>, <a href="https://telegram.me/bitcoin24">Telegram</a></p>'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'black'
        }))
        .add(new ymaps.Placemark([55.761455, 37.619755], {
            balloonContent: '<p><b>ЦУМ</b> - Покупка и продажа биткойнов за наличные.<br>'+
      'RUB: от 500,000 рублей<br><img src="https://cdn0.iconfinder.com/data/icons/simple-seo-and-internet-icons/512/location_oplimization-512.png" width="32" height="32"><b>Проверенный трейдер (Verified trader)</b><br><a href="skype:Lax0033?add">Skype</a>, <a href="https://telegram.me/bitcoin24">Telegram</a></p>'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'black'
        }))
        .add(new ymaps.Placemark([55.738055, 37.260255], {
            balloonContent: '<p><b>Barvikha Luxury Bitcoins</b> - Покупка и продажа биткойнов за наличные.<br>'+
      'RUB: от 500,000 рублей<br>USD: от $10,000<br>EUR: от €10,000<br><img src="https://cdn0.iconfinder.com/data/icons/simple-seo-and-internet-icons/512/location_oplimization-512.png" width="32" height="32"><b>Проверенный трейдер (Verified trader)</b><br><a href="skype:Lax0033?add">Skype</a>, <a href="https://telegram.me/bitcoin24">Telegram</a></p>'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'black'
        }));
        
}
