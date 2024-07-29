<?php

use App\Http\Controllers\HotelController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/login',[UserController::class,'login']);
Route::post('/register', [UserController::class,'store']);

Route::post('/hotel',[HotelController::class,'store']);


Route::get('/users/{id}', [UserController::class,'show']);
Route::put('/users/{id}', [UserController::class,'update']);
Route::delete('/users/{id}', [UserController::class,'destroy']);

Route::get('/liste-hotels',[HotelController::class,'index']);
Route::get('hotel/{id}',[HotelController::class,'show']);
Route::put('hotel/{id}',[HotelController::class,'update']);
Route::delete('hotel/{id}',[HotelController::class,'destroy']);