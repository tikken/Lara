<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'image', 'price', 'type'
    ];

    public function getPriceAttribute($value)
    {
        $newForm = "$" . $value;

        return $newForm;
    }
}
