@extends('layouts.admin')

@section('center')
    <div class="d-flex flex-row align-items-center m-2 ml-0">
        <h2 class="mr-3">Информация</h2>

        <a href="{{ route('adminCreateInfo') }}">
            <button class="btn btn-primary">
                Создать
            </button>
        </a>
    </div>

    <div class="table-responsive">
        <table class="uk-table">
            <thead>
            <tr>
                <th>#</th>
                <th>Иконка</th>
                <th>Категория</th>
                <th>Заг. физ лица</th>
                <th>Заг. юр лица</th>
                <th>Опис. для физ лица</th>
                <th>Опис. для юр лица</th>
            </tr>
            </thead>
            <tbody>

            @foreach($information as $info)
                <tr>
                    <td>{{$info['id']}}</td>
                    <td><img uk-img style="height: 30px;widht:30px; object-fit: contain" src="{{ Storage::url('information_icons/' . $info['image']) }}"/></td>
                    <td>{{$info['category']}}</td>
                    <td>{{$info['fizik_title']}}</td>
                    <td>{{$info['urik_title']}}</td>

                    <td>{{Str::limit($info['fizik_text'], 20)}}</td>
                    <td>{{Str::limit($info['urik_text'], 20)}}</td>

                    <td>
                        <a href="{{route('adminEditInformation', ['id' => $info['id']]) }}" class="btn btn-outline-primary">
                            <svg class="bi bi-gear" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 014.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 01-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 011.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 012.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 012.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 011.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 01-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 018.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 001.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 00.52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 00-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 00-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 00-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 00-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 00.52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 001.255-.52l.094-.319z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 100 4.492 2.246 2.246 0 000-4.492zM4.754 8a3.246 3.246 0 116.492 0 3.246 3.246 0 01-6.492 0z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                    </td>

                    <td>
                        <a href="{{route('adminDeleteInfo', ['id' => $info['id']])}}" class="btn btn-danger">
                            <span class="ui-icon" uk-icon="close">X</span>
                        </a>
                    </td>
                </tr>
            @endforeach

            </tbody>
        </table>

        {{--<ul class="uk-pagination">--}}
            {{--{{ $information->links() }}--}}
        {{--</ul>--}}

    </div>

@endsection
