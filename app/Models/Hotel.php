<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;
    protected $fillable =[
        "hotelName",
        "addresse",
        "email",
        "telephone",
        "prix",
        "currency",
        "image"
    ];
}
