<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'api/v1/', 'middleware' => ['api']], function () {
	Route::post('user/signup', 'Api\v1\AuthenticationController@signup');
	Route::post('login', 'Api\v1\AuthenticationController@authenticate'); 
	
	Route::post('insertServiceType', 'Api\v1\ServiceController@insertServices');
    Route::post('insertLocation', 'Api\v1\LocationController@insertLocation');
    Route::post('listLocation', 'Api\v1\LocationController@listLocation');
});

Route::group(['prefix' => 'api/v1/', 'middleware' => ['api','jwt.auth']], function () {
	
});

Route::auth();

Route::get('/home', 'HomeController@index');

Route::auth();

Route::get('/home', 'HomeController@index');
