<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $table = 'cart';
    protected $primaryKey = 'cart_id';
    public $timestamps = false;
    // public function customer(){
    //     return $this->belongsTo('App\Customer','customer_id');
    // }
}
