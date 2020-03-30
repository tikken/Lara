$(document).ready(function() {
    $('.menu_wrapper-item_hamburger').on('click', () => {
        $('body').toggleClass('overflow');
        $('.menu_wrapper-item_secondary').toggleClass('as-visible');
        $('.menu_wrapper-item_secondary').toggleClass('mobile_menu');
    })
});

let menuItems = document.querySelectorAll('.menu_wrapper-item-main_menu-item');
let secondary = $('.menu_wrapper-item-main_menu-item-text_secondary');
let menu = document.querySelector('.menu_wrapper-item-main_menu');
let dropdown = document.querySelector('.menu_wrapper-item_menuText');

let array = [secondary, menu,dropdown];

function _handleChange(item) {
    $(item).mouseover(function() {
        $(menu).css('display', 'block');
    });
    $(item).mouseleave(function() {
        $(menu).css('display', 'none');
    });
}

//main page dropdown
array.forEach((el) => {
    _handleChange(el);
});

$(secondary).hover(() => {
    $('.menu_wrapper-item-main_menu-item-text_secondary').toggleClass('as-visible');
})

$(menuItems[5]).hover(function() {
    $('.menu_wrapper-item-main_menu-item-text_secondary').toggleClass('as-visible')
});