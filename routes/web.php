<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
Route::any('/', 'HomeController@myHome')->name('/');
Route::any('myHome', 'HomeController@myHome')->name('myHome');
Route::middleware(['role:Administrator', 'role:Supervisor'])->group(function () {
    Route::get('/manage_users', 'HomeController@manage_users')->name('manage_users');
    Route::post('click_checkbox_user', 'HomeController@click_checkbox_user')->name('click_checkbox_user');
});
Route::middleware(['role:Administrator', 'role:Supervisor', 'role:Caller'])->group(function () {

});
