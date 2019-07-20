<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'product';
    protected $primaryKey = 'product_id';
    public $timestamps = false;
    public function category(){
        return $this->belongsTo('App\ProductCategory','category_id');
    }
}
