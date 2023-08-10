<?php

namespace App\Http\Controllers;
use App\Models\Like;
use App\Models\Post;
use App\Models\User;
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
    public function unlike($post_id)
    {
        $user_id = Auth::id();
        $post = Post::find($post_id);
        if (!$post) {
            return response()->json(['status' => 'Post was not found']);
        }
        $existingLike = Like::where('user_id', $user_id)->where('post_id', $post_id)->first();
        $existingLike->delete();
        return response()->json(['status' => 'Unliked']);
    }
}
