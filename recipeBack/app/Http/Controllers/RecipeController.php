<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index(){
        return Recipe::all();
    }

    public function show($id){
        return Recipe::find($id);
    }

    public function store(Request $request){
        return Recipe::create($request->all());
    }

    public function update(Request $request, $id){
        $recipe = Recipe::findOrFail($id);
        $recipe->update($request->all());
        return $recipe;
    }

    public function delete(Request $request, $id){
        $user = Recipe::findOrFail($id);
        $user->delete();
        return(204);
    }

}
