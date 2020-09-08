import $ from 'jquery';

class MenuController {
    _handleChange(item, menu) {
        $(item).mouseover(function() {
            $(menu).css('display', 'block');
        });
        $(item).mouseleave(function() {
            $(menu).css('display', 'none');
        });
    }



    _initMainDropDown(array, menu) {
        array.forEach((el) => {
            this._handleChange(el, menu);
        });
    }


    _secondaryMenu(secondary, menuItems) {
        $(secondary).hover(() => {
            $('.menu_wrapper-item-main_menu-item-text_secondary').add('as-visible');
        });

        // $(menuItems[0]).hover(function() {
        //     document.querySelector('.secondaryTop').classList.add('as-visible')
        // });
        // $(menuItems[0]).on("mouseleave", function () {
        //     document.querySelector('.secondaryTop').classList.remove('as-visible')
        // });

        $(menuItems[5]).hover(function() {
            document.querySelector('.menu_wrapper-item-main_menu-item-text_secondary').classList.add('as-visible')
        });
        $(menuItems[5]).on("mouseleave", function () {
            document.querySelector('.menu_wrapper-item-main_menu-item-text_secondary').classList.remove('as-visible')
        });

        $('.secondaryTop').on('mouseenter',function () {
            document.querySelector('.secondaryTop').classList.add('as-visible')
        });
        $('.secondaryTop').on('mouseleave',function () {
            document.querySelector('.secondaryTop').classList.remove('as-visible')
        });
        $('.secondaryBottom').on('mouseenter',function () {
            document.querySelector('.secondaryBottom').classList.add('as-visible')
        });
        $('.secondaryBottom').on('mouseleave',function () {
            document.querySelector('.secondaryBottom').classList.remove('as-visible')
        });
    }

    constructor() {
        let secondary = $('.menu_wrapper-item-main_menu-item-text_secondary');
        let menuItems = document.querySelectorAll('.menu_wrapper-item-main_menu-item');
        let menu = document.querySelector('.menu_wrapper-item-main_menu');
        let drop = document.querySelector('.menu_wrapper-item');
        let array = [secondary, drop];

        this._initMainDropDown(array, menu);
        this._secondaryMenu(secondary, menuItems);

        if (window.screen.width < 1000) {
            // this._initMobileDropDown();
        }
    }
}

export default MenuController;
