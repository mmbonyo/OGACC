
<?php
class MySQlDatabase
{
	private static $servername;
	private static $username;
	private static $password;
	private static $dbname;

	function __construct()
	{

	}

	public static function connect()
	{
		self::$servername="localhost";
		self::$username="root";
		self::$password="";
		self::$dbname="TPDC";

		try
		{
			$connString="mysql:host=".self::$servername.";dbname=".self::$dbname;
		    $pdo=new PDO($connString,self::$username,self::$password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		    return $pdo;

		}
		catch(PDOException $e)
		{
            echo "Connection Failed: ".$e->getMessage();
		}

		
	}
}

?>