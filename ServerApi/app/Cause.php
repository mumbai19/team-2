<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cause extends Model
{
    protected $table = 'cause';
    protected $primaryKey = 'cause_id';
    public $timestamps = false;
}

