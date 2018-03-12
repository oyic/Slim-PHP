<?php

namespace Glue\Controllers\Auth;

use Glue\Controllers\BaseController;

class AuthController extends BaseController
{
	
	public function getSignIn($request,$response)
	{
		$this->args['page_title'] = 'Sign In';
		return $this->view->render($response,'auth/signin.twig',$this->args);
	}
	public function postSignIn($request,$response)
	{
		
	}
	
	public function getForgotPassword($request,$response)
	{
		$this->args['page_title'] = 'Forgot Password';
		return $this->view->render($response,'auth/forgotpassword.twig',$this->args);
	}
		public function postForgotPassword($request,$response)
	{

	}
}