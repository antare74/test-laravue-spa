<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>ANTARE74</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    </head>
    <body class="bg-gray-100">
        <noscript>
            <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur modi nihil totam tempore maxime, non ea sed, voluptas quidem quas voluptates, mollitia magni ad temporibus harum provident qui officiis.
            </strong>
        </noscript>
        <div class="app" id="app">
            <App />
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
