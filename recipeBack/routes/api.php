<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RecipeController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/all',[RecipeController::class, 'index']);
Route::get('/getRecipe/{id}',[RecipeController::class, 'show']);
Route::post('/addRecipe',[RecipeController::class, 'store']);
Route::put('/recipe/{id}',[RecipeController::class, 'update']);
Route::delete('/delt/{id}',[RecipeController::class, 'delete']);