<?php
namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use Auth;

class AuthenticationController extends Controller
{
    /**
     * @api {post} api/v1/user/signup User SignUp
     * @apiDescription API for signup. 
     * @apiName User SignUp
     * @apiGroup 1-Authentication     
     * @apiParam {String} fname First name of the user.
     * @apiParam {String} lname Last name of the user. 
     * @apiParam {String} phone Phone number of the user.
     * @apiParam {String} email Email Id of the user.
     * @apiParam {String} password Password of user.      
     * @apiSuccess {String} success.
     * @apiSuccessExample Success-Response:
     * HTTP/1.1 200 OK
     * {
     *     "status": "1",
     *     "message": "success"
     * }
     * 
     * 
     * @apiError error Message invalid_credentials.
     * @apiError error Message could_not_create_token
     * @apiError error Message validation_errors
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 invalid_credentials
     *     {
     *       "status":"0",
     *       "error": "invalid_credentials"
     *     }
     *    
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 422 validation_errors
     *     {
     *         "status": "0",
     *           "error": "validation_errors",
     *        "error_detail": {
     *           "email": [
     *             "The email field is required."
     *           ],
     *           "password": [
     *             "The password field is required."
     *           ]
     *         }
     *       }
     * 
     */

    /**
     * Store a newly created user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function signup(Request $request) {

        $validator_exists = Validator::make($request->all(), [
                    'email' => 'unique:users'
        ]);
        if ($validator_exists->fails()) {
            return response()->json(['status' => '0', 'message' => 'It looks like you already created this account. Try logging in.']);
        }
        $email = $request->email;
        $pattern = "^[a-z0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+(\.[a-z0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,})$^";
       if(preg_match($pattern, $email)==0){
           return response()->json(['status' => 'FAILURE', 'message' => "Please enter a valid email address."]);
       }
        $validator = Validator::make($request->all(), [
                    'email' => 'required',
                    'password' => 'required|min:6'
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 'FAILURE', 'message' => "Oops! You have provided wrong credentials"]);
        }
        
        $hashed_email = Hash::make($email);
        $token = $hashed_email . rand(0, 1000);

        $credentials = $request->only('email', 'password');
        $user = new User();
        $vendor = new Vendor();

        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->fname = (isset($request->fname) ? $request->fname : '');
        $user->lname = (isset($request->lname) ? $request->lname : '');
        $user->phone = (isset($request->phone) ? $request->phone : '');
        $user->roles = $request->role;
        $user->brand_name = (isset($request->brand_name) ? $request->brand_name : '');
        $user->service_type = (isset($request->service_type) ? $request->service_type : '');
        $user->token = $token;
        /*$user->logout = 1;
        $user->status = '0';*/

        if ($user->save()) {
            $userid = $user->id;
            $token = JWTAuth::attempt($credentials);
            $userToken = compact('token');
            //$mailer->sendEmailConfirmationTo($user, $name_user);        
            
            // $file = fopen("/home/clone_wedmegood/test.txt","w");
            // fwrite($file,$request->email);
            // fclose($file);die; 
            return response()->json(['status' => '1', 'message' => 'Congrats, you’re in! Check your email for verification.', 'user_details' => ['user_token' => $userToken['token'], 'user_id' => $user->id, 'user_role' => $user->roles]]);
        }
    }

    /**
     * @api {post} api/v1/user/authenticate User Login Authentication
     * @apiDescription API for user login athentication. This token would be used for the making all other request here after. 
     * Once you have received the token after successfull authentication, You need to append an Authorization header with all the request.
     * @apiParamExample {json} Header sample :
     * Authorization Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzODkiLCJpc3MiOiJodHRwOlwvXC9ib3VudHNhcGkub3JnXC9hcGlcL3YxXC9yZWZyZXNoZXhwaXJlZHRva2VuIiwiaWF0IjoiMTQ0ODQ1NDc0MCIsImV4cCI6IjE0NDg0NTgzNDAiLCJuYmYiOiIxNDQ4NDU0NzQwIiwianRpIjoiMTM1Zjg2ODZlNTlhNGYxNzJhNDRkMWFlY2RmNzI2YmMifQ.h2lyK0eyCo5_XchfnVysZkSpzMJsigV3LZyFABIcrFA
     * @apiName User Login Authentication 
     * @apiGroup 1-Authentication     
     * @apiParam {String} email Email Id of user.
     * @apiParam {String} password Password of user.
     * @apiSuccess {String} success.
     * @apiSuccessExample Success-Response:
     * HTTP/1.1 200 OK
     * {
     *   "status": "1",
     *   "message": "success",
     *   "user_details": {
     *    "user_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cLzE5Mi4xNjguMS4yMFwvcHJvamVjdHNcL3NwZWVyaXRcL3B1YmxpY1wvYXBpXC92MVwvdXNlclwvYXV0aGVudGljYXRlIiwiaWF0IjoxNDUzODg0MzU0LCJleHAiOjE0NTM4ODc5NTQsIm5iZiI6MTQ1Mzg4NDM1NCwianRpIjoiYjRkOWYzMDFhMmY0M2UxMDM3NTJjZGYyZTBlNmE0NzAifQ.n4iRqngRtthO35TkPVNQThgRKZcJCh86497K_YwN9vY",
     *       "user_id": 1
     *     }
     *   }
     * 
     * 
     * @apiError error Message invalid_credentials.
     * @apiError error Message could_not_create_token
     * @apiError error Message validation_errors
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 invalid_credentials
     *     {
     *       "status":"0",
     *       "error": "invalid_credentials"
     *     }
     *    
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 422 validation_errors
     *     {
     *         "status": "0",
     *         "error": "invalid_credentials"
     *       }
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 422 verify email
     *     {
     *         "status": "0",
     *         "error": "Please verify your email"
     *       }
     * 
     */

    /**
     * User Login 
     *
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request) {
        // grab credentials from the request
        if ($request->email) {
            $credentials = $request->only(['email', 'password']);
            if (Auth::attempt($credentials)) {    
                return $this->directAuthenticate($request);
            } else {
                return response()->json(['status' => '0', 'message' => "Please enter a valid email address and password."], 200);
            }
        } else {
            return response()->json(['status' => '0', 'message' => 'Error']);
        }
    }

    public function directAuthenticate($request) {
        $userinfo = User::where('email', $request->email)
                ->first();        
        if ($userinfo) {           
            $res = $this->generateToken($userinfo);
            if ($res) {
                return response()->json(['message' => 'success', 
                    'user_details' => ['user_token' => $res['token'], 'user_id' => $userinfo->id, 'user_role' => $userinfo->roles]]);
            } else {
                return response()->json(['status' => '0', 'message' => 'Error']);
            }
        } else {
            return response()->json(['status' => '0', 'message' => 'invalid user']);
        }
    }

    public function generateToken($userinfo) {
        $token = JWTAuth::fromUser($userinfo);
        return $userToken = compact('token');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
