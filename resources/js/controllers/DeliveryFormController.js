class DeliveryFormController {
    constructor(form) {
        if(form) {
            this._initMap(form);
            this._checkBoxes();
            this._listsHandler();
        }
    }
    _listsHandler() {
        let items = [];

        let a = document.querySelector('.metro_group_wrap_list-wrap');
            a && items.push(a);

        let b = document.querySelector('.postamat_list-wrap');
            b && items.push(b);

            items.forEach((a) => {
                a.addEventListener('click', function (e) {
                    let wrap = e.currentTarget;
                    let ul = wrap.querySelector('ul');

                    ul && ul.classList.toggle('active_ul');

                    let lis = ul.querySelectorAll('li');

                    lis.forEach((el) => {
                        el.addEventListener('click', function(e) {
                            console.warn(e.path);
                            let span = e.path[2].querySelector('span');
                                span.innerText = e.currentTarget.innerText;

                            let input = e.path[3].querySelector('input');
                                input.setAttribute('value', e.currentTarget.innerText);
                        });
                    });
                });
            });
    }
    _checkBoxes() {
        let check = document.querySelectorAll('.delivery_type-item');
            function clear() {
                check.forEach((el) => {
                    let item = el.querySelector('img');

                    let checkbox = el.querySelector('[type="checkbox"]');
                        checkbox.removeAttribute('value');

                    if(item.classList.contains('display')) {
                            item.classList.remove('display')
                        }
                })
            }
            check.forEach((el) => {
                el.addEventListener('click', function(e) {
                    clear();

                    let checkbox = e.currentTarget.querySelector('[type="checkbox"]');
                        checkbox.setAttribute('value', 'checked');

                    let item = e.currentTarget.querySelector('img');
                        item && $(item).toggleClass('display');
                });
            })
    }
    _initMap() {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                    center: [55.751574, 37.573856],
                    zoom: 12
                }, {
                    searchControlProvider: 'yandex#search'
                }),

                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Это красивая метка'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: 'images/myIcon.gif',
                    // Размеры метки.
                    iconImageSize: [30, 42],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -38]
                }),

                myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                    hintContent: 'Собственный значок метки с контентом',
                    balloonContent: 'А эта — новогодняя',
                    iconContent: '12'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    // Своё изображение иконки метки.
                    iconImageHref: 'images/ball.png',
                    // Размеры метки.
                    iconImageSize: [48, 48],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-24, -24],
                    // Смещение слоя с содержимым относительно слоя с картинкой.
                    iconContentOffset: [15, 15],
                    // Макет содержимого.
                    iconContentLayout: MyIconContentLayout
                });

            myMap.geoObjects
                .add(myPlacemark)
                .add(myPlacemarkWithContent);
        });
    }

}

export default DeliveryFormController;