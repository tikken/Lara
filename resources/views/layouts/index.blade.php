<!DOCTYPE html>
{{--<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">--}}
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @include('components.styles.style')
    @include('components.scripts.scripts')

    <link rel="stylesheet" href="/css/app.css">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177029583-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-177029583-1');
    </script>
    <link href="/images/icons/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <title>RECART.me</title>
</head>
<body>
        @include('components.header.header')
        @include('components.menu.menu')

        <div class="page_content">
            @yield('center')
        </div>

        @include('components.subscriptions.subscriptions')
        @include('layouts.footer')
</body>
