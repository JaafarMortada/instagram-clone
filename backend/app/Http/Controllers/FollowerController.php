<?php

namespace App\Http\Controllers;
use App\Models\Follower;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FollowerController extends Controller
{
    public function follow($id){
        if (Follower::where('follower_id', Auth::id())->where('followed_id', intval($id))->first()) {
            return response()->json(["status" => "already following"]);
        } else if (intval($id) == Auth::id()) {
            return response()->json(["status" => "this is you"]);
        }
        $follower = new Follower;
        $follower->follower_id = Auth::id();
        $follower->followed_id = intval($id);
        $follower->save();
        return response()->json(["status" => "followed successfully"]);
    }

    public function unFollow($id){

    $follower = Follower::where('follower_id', Auth::id())
                        ->where('followed_id', intval($id))
                        ->first();
    if ($follower) {
        $follower->delete();
        return response()->json(["status" => "unfollowed successfully"]);
    } else {
        return response()->json(["status" => "You were not following"]);
    }
    }
}
