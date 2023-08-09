<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
    use HasFactory;
    public $timestamps = false;
    public function follows()
    {
        return $this->belongsTo(User::class);
    }
    public function followed()
    {
        return $this->belongsTo(User::class);
    }
}
