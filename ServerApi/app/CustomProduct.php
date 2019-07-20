<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomProduct extends Model
{
    protected $table = 'customized_product';
    protected $primaryKey = 'customize_id';
    public $timestamps = false;

}
