<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
class PostController extends Controller
{
    function addPost(Request $request){
        $post = new Post;
        $post->user_id = Auth::id();
        $post->description = $request->description;
        $file_name = time()."post_image".".".$request->image_path->extension();
        $request -> image_path ->move(storage_path('images'),$file_name);
        $post-> image_path = storage_path("images"). "\\" .$file_name;
        $post->save();

        return response()->json(["status" => $post]);
    }

    function getPosts(){
        $user = Auth::user();
        $posts = Post::whereIn('user_id', $user->followed->pluck('id'))->orderBy('created_at', 'desc')->get();
        foreach ($posts as $post){
            $image64 = base64_encode(file_get_contents(str_replace(' ', '', $post->image_path)));
            $post -> image_path = $image64;
            $post->is_liked = $post->likes->contains('user_id', $user->id);
            $post->username = User::where('id', $post->user_id)->first()->username;
            unset($post->user_id);
        }
        return response()->json([
            'status' => 'success',
            'posts' => $posts,
        ]);
    }
}
