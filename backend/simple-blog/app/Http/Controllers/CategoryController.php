<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Models\User;
use Illuminate\Support\Facades\Log;


class CategoryController extends Controller
{
    
    public function getCategories()
    {
        try 
        {
            $category = Category::all();

            return response()->json([
                'success'=>true,
                'categories'=>$category
            ]);
        }catch(\Exception $e)
        {
            return response()->json([
                'success'=>false,
                'message'=>'No categories Found'
            ]);
        }
      
    }

    public function getCategory($id)
    {
        try
        {
            $category = Category::findOrFail($id);

            return response()->json([
                'success'=> true,
                'category'=>$category,
                'id'=>$id
            ]);
        }catch(\Exception $e)
        {
            return response()->json([
                'success'=>false,
                'category'=>'No Category Found'
            ]);
        }
        
    }

    public function createCategory(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:categories,name'
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation Error',
                'errors' => $validator->errors(),
            ]);
        }
        $category = Category::create([
            'name' => $request->name
        ]);
    
        return response()->json([
            'success' => true,
            'category' => $category
        ], 201); 
        }catch(\Exception $e)
        {
            response()->json([
                'success'=>false,
                'message'=>'failed to create a Category'
            ]);
        }
       
        
    }

    public function updateCategory($id, Request $request)
    {
        try {
           
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|unique:categories,name,' . $id,
            ]);
    
            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'errors' => $validator->errors(),
                ], 400);
            }
    

            $category = Category::findOrFail($id);
    

            $category->update([
                'name' => $request->name,
            ]);
    
            return response()->json([
                'success' => true,
                'category' => $category,
                'message' => 'Updated successfully',
            ]);
        } catch (\Exception $e) {
        
            Log::error('Error updating category: ' . $e->getMessage());
    
            return response()->json([
                'success' => false,
                'message' => 'Error while updating category',
                'error' => $e->getMessage(), 
            ]);
        }
    }
    

    public function deleteCategory($id)
    {
        try
        {
            $category = Category::findOrFail($id);
            $category->delete();

            return response()->json([
                'success'=>true,
                'message'=>'deleted successfully',
            ]);

        }catch(\Exception $e)
        {
            return response()->json([
                'success'=>false,
                'message'=>'failed to delete Category'
            ]);
        }
      

    }
}
