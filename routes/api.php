<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\ApiProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json(['success' => true, "data" => $request->user()]);
});

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'product'], function(){
    Route::get('/get', [ApiProductController::class, 'get']);
    Route::post('/add', [ApiProductController::class, 'add']);
    Route::get('/delete/{id}', [ApiProductController::class, 'delete']);
    Route::post('/edit/{id}', [ApiProductController::class, 'edit']);
});

Route::prefix('/auth')->group(function () {
    Route::any('/login', [ApiController::class, 'login'])->name('login');
    Route::group(['middleware' => 'auth:sanctum'], function(){
        Route::post('/logout', [ApiController::class, 'logout'])->name('logout');
        Route::get('/check-login', function(){
            return true;
        });
    });

});
