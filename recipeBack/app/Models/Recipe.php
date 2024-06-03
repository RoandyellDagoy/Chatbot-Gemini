<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Recipe extends Model
{
    use HasFactory;
    
    protected $fillable  =['id','recipe_name','ingredients', 'instructions','prep_time','cook_time'];
    
}
