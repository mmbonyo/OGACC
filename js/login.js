
$(function(){

		$("#username_error_message").hide();
		$("#password_error_message").hide();

		var error_username=0;
		var error_password=0;

		$("#form_username").mouseleave(function(){check_username();});
		$("#form_password").mouseleave(function(){check_password();});

		function check_username()
		{
			var username=$("#form_username").val();
			if (username!=='')
			{   
				$.post('check_user.php',{username:username},
				function(data)
				{
					if(data==1)
				  {
				  	$("#username_error_message").html("<span class=\"glyphicon glyphicon-ok\"></span>");
					$("#username_error_message").css("color","#34F458");
					$("#username_error_message").show();
					$("#form_username").css("border","1px solid #34F458");

					 error_username=1;
				   }
					else
					{
					$("#username_error_message").html("<span class=\"glyphicon glyphicon-remove\"></span>");
					$("#username_error_message").css("color","#F90A0A");
					$("#username_error_message").show();
					$("#form_username").css("border","1px solid #F90A0A");
						
					}  
				});

			}
		}

		function check_password()
		{
			
			var password=$("#form_password").val();
			var username=$("#form_username").val();
			
			if (password!=='')
			{   	
				$.post('check_username_and_password.php',{password:password,username:username},
				function(data)
				{

					if(data==1)
				  {
				  	$("#password_error_message").html("<span class=\"glyphicon glyphicon-ok\"></span>");
					$("#password_error_message").css("color","#34F458");
					$("#form_password").css("border","1px solid #34F458");
					 error_username=1;
				   }
					else
					{
					$("#password_error_message").html("<span class=\"glyphicon glyphicon-remove\"></span>");
					$("#password_error_message").css("color","#F90A0A");
					$("#password_error_message").show();
					$("#form_password").css("border","1px solid #F90A0A");
					
					 // error_username=0;	
					}  
				});

			}
			
		}			
	
  });
	






