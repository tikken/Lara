<link rel="stylesheet" href="/css/app.css">
@include('components.styles.style')
@include('components.header.header')
@include('components.menu.menu')

<div class="cart">
    <div class="cart_wrap">
        @include('components.breadcrumbs.cart_wrap-crumb')

        @yield('center')
    </div>
</div>

@include('components.scripts.scripts')
@include('layouts.footer')
