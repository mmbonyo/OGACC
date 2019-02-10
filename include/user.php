<?php
require_once("connect.php");
class User extends  MySQlDatabase
{
	public static function getAllUsers()
	{
		$stmt="SELECT * FROM user";
		$result_set=self::find_by_sql($stmt);
		while ($rows=$result_set->fetch()) 
		{
			echo $rows['USERNAME']."<br/>";
		}
	}

	public static function authenticate($username="",$password="")
	{

       $stmt=self::connect()->prepare("SELECT * FROM user WHERE USERNAME=? AND PASSWORD=?");
       $stmt->execute(array($username,$password));
       return $stmt;
       
	}

	public static function insert_to_user($username="",$password="")
	{

		$username=$username;
		$password=$password;
       $stmt=self::connect()->prepare("INSERT INTO user(USERNAME,PASSWORD,STATUS)VALUES(?,?,'unactive')");
       $stmt->execute(array($username,$password));
       return $stmt;
       
	}


	public static function find_by_sql($sql="")
	{
		$result_set=self::connect()->query($sql);
		return $result_set;
	}

	public static function check_username($username)
	{
	   $stmt=self::connect()->prepare("SELECT * FROM user WHERE USERNAME=? LIMIT 1");
       $stmt->execute(array($username));
       return $stmt;
	}


	public static function check_password($password)
	{
	   $stmt=self::connect()->prepare("SELECT * FROM user WHERE PASSWORD=? LIMIT 1");
       $stmt->execute(array($password));
       return $stmt;
	}

	public static function check_username_and_password($password,$username)
	{
	   $stmt=self::connect()->prepare("SELECT * FROM user WHERE PASSWORD=? AND USERNAME=? LIMIT 1");
       $stmt->execute(array($password,$username));
       return $stmt;
	}

	public static function show_username($ID)
	{
	   $stmt=self::connect()->prepare("SELECT * FROM user WHERE ID=? LIMIT 1");
       $stmt->execute(array($ID));
       while($row=$stmt->fetch())
       {
       	   return $row['USERNAME'];
       }
	}



}

?>