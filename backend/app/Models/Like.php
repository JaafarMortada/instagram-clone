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
        return $this->belongsTo(User::class, 'user_id');
    }
    public function likeon()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }
}
