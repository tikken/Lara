
<div class="owl-item">
    <div class="carousel_card">
        <div class="carousel_card-wrapper">
            <div class="carousel_card-wrapper_item">
                <span class="carousel_card-wrapper_item-name">Картридж</span>
            </div>
            <div class="carousel_card-wrapper_item">
                <span class="carousel_card-wrapper_item-heading">
                    <?
                    if(gettype($name) === 'array') {
                        echo str_limit(json_decode($name_buh), $limit = 40, $end = '...');
                    } else {
                        echo str_limit($name, $limit = 40, $end = '...');
                    }
                    ?>
                </span>
            </div>

            <div class="carousel_card-wrapper_item">
                <div class="carousel_card-wrapper_item-image" style="background-image: url({{ Storage::url('product_images/' . $product['image']) }})">
                    {{--<img src="{{Storage::disk('local')->url('/product_images/' . $image . 'png' )}}" alt="{{$image}}" />--}}
                    <img src="/images/unnecessary/owl-swiper.svg" alt="cart" />
                </div>
            </div>

            <div class="carousel_card-wrapper_item">
                <div class="carousel_card-wrapper_item-buttons">
                    <div class="carousel_card-wrapper_item-buttons_price">
                        <span>{{$product->price}}</span>
                        <img
                            class="carousel_card-wrapper_item-buttons_price-currency"
                            src="/images/menu/rub.svg"
                            alt="rub"
                        />
                    </div>
                    <div class="carousel_card-wrapper_item-buttons_cart ajaxGETproduct" data-url="{{ route('AddToCartAjaxGet', ['id' => $product->id]) }}">
                        <img
                            class="carousel_card-wrapper_item-buttons_cart-item"
                            src="/images/icons/cart.svg"
                            alt="cart"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
