<?php
namespace App\Http\Middleware;

use Closure;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException;
use Illuminate\Http\Request;

class AuthMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        try {
            if ($request->is('api/login') || $request->is('api/register')) {
                return $next($request);
            }
        
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['error' => 'User not found'], 404);
            }
        } catch (JWTException $e) {
          
            return response()->json(['error' => 'Token is invalid'], 400);
        }

        return $next($request);
    }
}
