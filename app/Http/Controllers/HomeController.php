<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Role;
use App\User;
use Config;
use Excel;
use Validator;
use DB;
use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }
    public function myHome(Request $request)
    {
        //dd('lo');
        /*$admin = new Role();
        $admin->name         = 'Administrator';
        $admin->display_name = 'Project Administrator'; // optional
        $admin->description  = 'User is that manage to project'; // optional
        $admin->save();
        $role = Role::find(1);
        $user = Auth::User();
        $user->attachRole($role);*/
        //dd('l');
        return view('myHome');
    }
    public function manage_users()
    {
        $users = User::all();
        $data = [];
        foreach ($users as $key=>$user) {
            if(!$user->hasRole('Administrator') && !$user->hasRole('Supervisor')){
                $array = array('id' => $user['id']);
                $array = array_add($array, 'username', $user['name']);
                $array = array_add($array, 'email', $user['email']);
                $array = array_add($array, 'number', $key);
                if($user->hasRole('Caller')){
                    $array = array_add($array, 'caller', '1');
                }else{
                    $array = array_add($array, 'caller', '0');
                }
                $data[$key] = $array;
            }
        }
        return view('manage_users', compact('data'));
    }
    public function click_checkbox_user(Request $request)
    {
        if ( request()->ajax() ){
            $message = "nuuuul";
            if($request->all()['is_checked'] === 'true'){
                $user = User::find((int)$request->all()['id']);
                $role = Role::find(1);
                $user->attachRole($role);
                $message = "دسترسی به کاربر داده شد.";
            }else{
                $userModel = User::find((int)$request->all()['id']);
                //$message = $message + (int)$request->all()['id'];
                $userModel->detachRoles($userModel->roles);
                $message = "دسترسی کاربر حذف گردید";
            }
            return response()->json(json_encode($message));
        }

    }
}
