<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Follower;
use Illuminate\Support\Facades\Auth;
class UserController extends Controller
{
    function follow($username) {
        $auth_user = Auth::user();
        $user_to_follow = User::where('username', $username)->first();
        if($user_to_follow){
            $auth_user->followed()->attach($user_to_follow->id);
            return response()->json(['status' => 'followed successfully']);
        }
        return response()->json(['status' => 'error']);
    }
    
    function unfollow($username) {
        $auth_user = Auth::user();
        $user_to_unfollow = User::where('username', $username)->first();
        if($user_to_unfollow){
            $auth_user->followed()->detach($user_to_unfollow->id);
            return response()->json(['status' => 'unfollowed successfully']);
        }
        return response()->json(['status' => 'error']);
    }

    function searchUsers($username) {
        $auth_user = Auth::user();
        $users = User::where('username', 'LIKE', "%{$username}%")->where('id', '!=', $auth_user->id)->get();
        $following = $auth_user->followed()->get();
        foreach($users as $user){
            $user->is_following = $following->contains($user);
        }
        return response()->json(['users' => $users]);
    }
}
