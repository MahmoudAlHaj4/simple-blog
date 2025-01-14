<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\log;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class PostsController extends Controller
{
    

    public function getPosts()
    {
        try
        {
            $posts = Posts::all();
            return response()->json([
                'success'=>true,
                'posts'=>$posts
            ]);

        }catch(\Exception $e)
        {
            return response()->json([
                'success'=>false,
                'message'=>'No posts found'
            ]);
        }
    }

    public function getPost($id)
    {
        try
        {
            $post = Posts::findOrFail($id);

            return response()->json([
                'success'=>true,
                'post'=>$post
            ]);
        }catch(\Exception $e)
        {
            return response()->json([
                'success'=>false,
                'message'=>'No post found'
            
            ]);
        }

    }

    public function getUserPosts()
    {
        try {
            $user = JWTAuth::user();
    
            if (!$user) {
                return response()->json([
                    'success' => false,
                    'message' => 'User is not authenticated.',
                ], 401);
            }
         
            $posts = $user->posts;
    
            if ($posts->isEmpty()) {
                return response()->json([
                    'success' => true,
                    'message' => 'User has no posts yet.',
                    'posts' => [],
                ]);
            }
    
            return response()->json([
                'success' => true,
                'posts' => $posts,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error occurred while fetching posts.',
            ]);
        }
    }
    
    

public function createPost(Request $request)
{
    try {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'content' => 'required|string|min:10',
            'category_id' => 'required|exists:categories,id',
            'image' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ], 400);
        }

        $user = JWTAuth::user();
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User is not authenticated.',
            ], 401);
        }

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('uploads', 'public');
        }

        $post = Posts::create([
            'title' => $request->title,
            'content' => $request->content,
            'category_id' => $request->category_id,
            'user_id' => $user->id,
            'image' => $imagePath,
        ]);

        return response()->json([
            'success' => true,
            'post' => $post,
            'message' => 'Post created successfully.',
        ], 201);

    } catch (\Exception $e) {
        Log::error('Error creating post: ' . $e->getMessage());

        return response()->json([
            'success' => false,
            'message' => 'Error occurred while creating the post.',
            'error' => $e->getMessage(),
        ]);
    }
}

public function deletePost($id)
{
    try
        {
            $post = Posts::findOrFail($id);
            $post->delete();

            return response()->json([
                'success'=>true,
                'message'=>'deleted successfully',
            ]);

        }catch(\Exception $e)
        {
            return response()->json([
                'success'=>false,
                'message'=>'failed to delete post'
            ]);
        }
}



}
