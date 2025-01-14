<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Middleware\AuthMiddleware;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostsController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware([AuthMiddleware::class])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::post('/profile', [AuthController::class, 'profile']);
    Route::get('/users', [AuthController::class, 'getUsers']);
    Route::get('/user/{id}', [AuthController::class, 'getUser']);
});

Route::middleware([AuthMiddleware::class])->prefix('categories')->group(function () {
    Route::get('/', [CategoryController::class, 'getCategories']);
    Route::get('/{id}', [CategoryController::class, 'getCategory']);
    Route::post('/create', [CategoryController::class, 'createCategory']);
    Route::put('/update/{id}', [CategoryController::class , 'updateCategory']);
    Route::delete('/delete/{id}', [CategoryController::class , 'deleteCategory']);
});


Route:: middleware([AuthMiddleware::class])->prefix('posts')->group(function (){
    Route::get('/', [PostsController::class , 'getPosts']); 
    Route::get('/post/{id}', [PostsController::class , 'getPost']);  
    Route::get('/user/posts', [PostsController::class , 'getUserPosts']);  
    Route::post('/create', [PostsController::class , 'createPost']);
    Route::delete('/delete/{id}', [PostsController::class, 'deletePost']);
    Route::delete('/user/post/delete', [PostsController::class, 'deletePost']);
});