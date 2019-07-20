<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('getproduct','APIProductController@getproduct');

Route::get('getCategories','APIProductController@getcategory');



Route::get('getTrendingProducts','APIProductController@gettrends');


Route::post('submitDonation','APIDonationController@submit');

Route::get('getCause','APIProductController@getcause');

Route::get('getProductDetails/{id}','APIProductController@getProductDetails');
Route::get('placeCustomOrders/{id}','APIProductController@placeCustomOrders');

