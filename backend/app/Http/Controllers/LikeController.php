<?php

namespace App\Http\Controllers;
use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function like($post_id){
        $like = new Like;
        $like->post_id = intval($post_id);
        $like->user_id = Auth::id();
        $like->save();
        return response()->json(["status" => "liked successfully"]);
    }
}
