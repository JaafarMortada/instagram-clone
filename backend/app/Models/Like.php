<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;
    public $timestamps = false;
    
    public function liked()
    {
        return $this->belongsTo(User::class);
    }
    public function likeOn()
    {
        return $this->belongsTo(Post::class);
    }
}
