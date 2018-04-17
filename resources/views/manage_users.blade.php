@extends('theme.default')
@section('content')
    <div class="container-fluid">
        <div class="block-header">
            <h2>Manage Users</h2>
        </div>
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="body table-responsive">
                        <ol class="breadcrumb breadcrumb-bg-pink">
                            <li><a href="{{ route('/') }}"><i class="material-icons">home</i> Home</a></li>
                            <li class="active"><i class="material-icons">people</i> Users</li>
                        </ol>
                        <table class="table table-condensed">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Select</th>
                            </tr>
                            </thead>
                            <tbody>
                                @foreach ($data as $user)
                                    <form method="post">
                                        <tr>
                                            <td>{{$user['number']}}</td>
                                            <td>{{$user['username']}}</td>
                                            <td>{{$user['email']}}</td>
                                            <td><input type="checkbox" id="{{$user['id']}}" class="filled-in chk-col-green select_user" {{($user['caller'] == '1') ? 'checked' : ""}} />
                                                <label for="{{$user['id']}}">GREEN</label>
                                            </td>
                                        </tr>
                                    </form>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection