class CartController {
    constructor(el) {
        let that = this;
        this.el = el;
        let btns = this.el.querySelectorAll('.ajaxGETproduct');

        this._setDeleteListeners();

       btns && btns.forEach((btn) => {
            btn.addEventListener('click', function(e) {
                that._makeCall(e);
            })
        });
    }

    _setDeleteListeners() {
        let that = this;
        let closes = this.el.querySelectorAll('.remove_icon');
        closes.forEach((el,i) => {
            el.addEventListener('click', function(e) {
                that._deleteFromCart(closes[i],el);
            });
        });
    }

    _deleteFromCart(item) {
        let url = item.getAttribute('data-href');
        let _token = $('input[name="_token"]').val();
        let that = this;

        $.ajax({
            method: "GET",
            url: url,
            data: {token: _token},
            success: function (data, status, XHR) {
                if($(data).hasClass('empty_cart')) {
                    let cart = $('.cart_wrap');
                    let amount = $('#cartAmount');
                    let price = $('#cartPrice');

                    console.log('test',$(data).find('#cartPrice'));


                    $(cart).html(data);
                    that._fixValues('', '', 'addClass');
                } else {
                    $('.cart_content').html(data);
                    that._setDeleteListeners();
                }
            },
            error: function (error, status, XHR) {
                console.warn(error);
            }
        });
    }
    _fixValues(cart, price, type = 0) {
        $('#cartAmount').html(cart);
        $('#cartPrice').html(price);
        if(type != 0) {
            $('.menu_wrapper-item_cart_currency').addClass('invisible');
        } else {
            $('.menu_wrapper-item_cart_currency').removeClass('invisible');
        }
    }
    _makeCall(e) {
        e.preventDefault();
        let that = this;

        let url = e.currentTarget.getAttribute('data-url');
        let _token = $('input[name="_token"]').val();

        $.ajax({
            method: "GET",
            url: url,
            data: {token: _token},
            success: function (data, status, XHR) {
                that._fixValues(data.cart, data.price);
            },
            error: function (error, status, XHR) {
                console.warn(error);
            }
        });
    }
}

export default CartController;