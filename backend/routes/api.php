<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\PostController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post('/add_post', [PostController::class, "addPost"]);
Route::get('/follow/{id?}', [FollowerController::class, "follow"]);