<?php

namespace App\Http\Controllers;
use App\Models\Follower;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FollowerController extends Controller
{
    public function follow($id){
        $follower = new Follower;
        $follower->follower_id = Auth::id();
        $follower->followed_id = intval($id);
        $follower->save();
        return response()->json(["status" => "followed successfully"]);
    }
}
