<?php

namespace App\Http\Controllers;
  
use App\Http\Controllers\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

  
class AuthController extends BaseController
{
    
    public function getUsers()
    {
        $users = User::all();

        return $this->sendResponse($users, 'users');
    }

    public function getUser($id)
    {
        $user = User::findOrFail($id);

        return $this->sendResponse($user, 'user');
    }

    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|',
            'password' => 'required',
            // 'c_password' => 'required|same:password',
        ]);
     
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
     
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['user'] =  $user;

        
   
        return $this->sendResponse($success, 'User register successfully.');
    }
  
  
    
    public function login()
    {
        $credentials = request(['email', 'password']);
  
        if (! $token = JWTAuth::attempt($credentials)) {
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        }
  
        $success = $this->respondWithToken($token);
   
        return $this->sendResponse($success, 'User login successfully.');
    }
  
    
    public function profile()
    {
        $user = JWTAuth::user();

    return response()->json($user);
    }
  
    
    public function logout()
    {
        try {
            
            JWTAuth::parseToken()->invalidate();
    
            return response()->json(['message' => 'Successfully logged out']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to logout, token invalid'], 401);
        }
    }
  
   
    public function refresh()
    {
        $token = JWTAuth::getToken();
        $newToken = JWTAuth::refresh($token);
    
        return response()->json(['token' => $newToken]);
    }
  
   
    protected function respondWithToken($token)
    {
        return [
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60
        ];
    }

}
