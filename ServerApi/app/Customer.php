<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';
    protected $primaryKey = 'customer_id';
    public $timestamps = false;
    // public function products(){
    //     return $this->hasMany('App\Product','product_id');
    // }
}
