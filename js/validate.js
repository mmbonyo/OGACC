$(function(){

		$("#username_error_message").hide();
		$("#password_error_message").hide();
		$("#cpassword_error_message").hide();

		var error_username=0;
		var error_password=0;
		var error_cpassword=0;

		$("#form_username").mouseleave(function(){check_username();});

		$("#form_password").mouseleave(function(){check_password();});

		$("#form_cpassword").mouseleave(function(){check_cpassword();});


		function check_username()
		{
			var pattern=/^[a-zA-Z]+$/;
			var username=$("#form_username").val();
			var rror_username="";

			if (username=='') 
			{
				$("#username_error_message").html("field is required");
				$("#username_error_message").css("color","#F90A0A");
				$("#username_error_message").show();
				$("#form_username").css("border","1px solid #F90A0A");
				error_username=1;
			}
			else if(pattern.test(username)&&username!=='')
			{   
				
				$.ajax({
					url:'check_user.php',
					type:'post',
					data:{username:username},
				success:function(response)
				{
					myfunction(response);
				  
				}
			});


			}
			else{

				$("#username_error_message").html("<span class=\"glyphicon glyphicon-remove\">Should contain only letters</span");
				$("#username_error_message").css("color","#F90A0A");
				$("#username_error_message").show();
				$("#form_username").css("border","1px solid #F90A0A");
				error_username=0;
			}
		}

		function myfunction(data)
		{
			if(data==1)
				  {
					$("#username_error_message").html("<span class=\"glyphicon glyphicon-remove\">username is already taken</span");
					$("#username_error_message").css("color","#F90A0A");
					$("#username_error_message").show();
					$("#form_username").css("border","1px solid #F90A0A");
					$('input[name=submit]').attr('disabled', true);
					 error_username=1;
				   }
					else
					{
					$("#username_error_message").html("<span class=\"glyphicon glyphicon-ok\">username is available</span>");
					$("#username_error_message").css("color","#34F458");
					$("#username_error_message").show();
					$("#form_username").css("border","1px solid #34F458");
					$('input[name=submit]').attr('disabled',false);
	
					}
		}

		function check_password()
		{
			var password_length=$("#form_password").val().length;
			if(password_length=='')
			{
				$("#password_error_message").html("field is required");
				$("#password_error_message").css("color","#F90A0A");
				$("#password_error_message").show();
				$("#form_password").css("border","1px solid #F90A0A");
				error_password=1;
			}
			else if(password_length<8)
			{
				$("#password_error_message").html("<span class=\"glyphicon glyphicon-remove\">atleast 8 characters</span>");
				$("#password_error_message").css("color","#F90A0A");
				$("#password_error_message").show();
				$("#form_password").css("border","1px solid #F90A0A");
				error_password=1;

			}else{
                $("#password_error_message").html("<span class=\"glyphicon glyphicon-ok\"></span>");
                $("#password_error_message").css("color","#34F458 ");
				$("#password_error_message").show();
				$("#form_password").css("border","1px solid #34F458 ");
			}
		}

		function check_cpassword()
		{
			var password=$("#form_password").val();
			var cpassword=$("#form_cpassword").val();
			var password_length=$("#form_cpassword").val().length;
			if(cpassword=='')
			{
				$("#cpassword_error_message").html("field is required");
				$("#cpassword_error_message").css("color","#F90A0A");
				$("#cpassword_error_message").show();
				$("#form_cpassword").css("border","1px solid #F90A0A ");
                  error_cpassword=1;

			}
			else if (cpassword!==password)
			 {

				$("#cpassword_error_message").html("<span class=\"glyphicon glyphicon-remove\">mismatch</span>");
				$("#cpassword_error_message").css("color","#F90A0A");
				$("#cpassword_error_message").show();
				$("#form_cpassword").css("border","1px solid #F90A0A ");
                  error_cpassword=1;

			}
			else if (password_length<8) 
			{
				$("#cpassword_error_message").html("<span class=\"glyphicon glyphicon-remove\">atleast 8 characters</span>");
				$("#password_error_message").css("color","#F90A0A");
				$("#cpassword_error_message").show();
				$("#form_cpassword").css("border","1px solid #F90A0A ");
                  error_cpassword=1;
			}
			else
			{	
				$("#cpassword_error_message").html("<span class=\"glyphicon glyphicon-ok\">match</span>");
				$("#cpassword_error_message").css("color","#34F458");
				$("#cpassword_error_message").show();
				$("#form_cpassword").css("border","1px solid #34F458");
				error_cpassword=0;
			}
		}

		$("form").submit(function(){

			error_username=0;
		    error_password=0;
		    error_cpassword=0;

		    check_username();
		    check_password();
		    check_cpassword();

		    if(error_username===0 && error_password===0 && error_cpassword===0)
		    {
		    	alert("Registration Successfully");
		    	return true;
		    }else{
		    	alert("Please fill the form correctly");
		    	return false;
		    }

		});

  });
	






