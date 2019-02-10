<?php

class Session
{
	private $logged_in=false;
	public  $user_id;
	function __construct()
	{
		session_start();
		$this->check_login();

		if($this->logged_in)
		{
            //action to take place if someone login
		}
		else
		{
           //action to take place if someone if login is false
		}
	}

	public function is_logged_in()
	{
		return $this->logged_in;
	}

	public function login($user)
	{
		//database should find user based on username/password
		if($user)
		{
			 while($row=$user->fetch())
			 {
		             $id=$row['ID'];
              }

			$this->user_id=$_SESSION['user_id']=$id;
			$this->logged_in=true;
		}
	}

	public function logout()
	{
		unset($_SESSION['user_id']);
		unset($this->user_id);
	}

	private function check_login()
	{
		if(isset($_SESSION['user_id']))
		{
			$this->user_id=$_SESSION['user_id'];
			$this->logged_in=true;
		}
		else
		{
			unset($this->user_id);
			$this->logged_in=false;
		}
	}
}

$session=new Session();
?>