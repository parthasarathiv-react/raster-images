$(document).ready(function(){

	$("#contact").click(function(){
	  var name   = $("#name").val();
	  var mobile   = $("#mobile").val();
	  var email  = $("#email").val();
	  var message  = $("#message").val();

	  var mailFilter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
	  var mobileFilter = /^\+?[0-9]*\.?[0-9]+$/;

	  var error = false;

		if(name.length < 4){
			var error = true;
			$("#error_name").fadeIn(500);
		}else{
			$("#error_name").fadeOut(500);
		}
		if(mobileFilter.test(mobile)){
			$("#error_mobile").fadeOut(500);
		}else{
			var error = true;
			$("#error_mobile").fadeIn(500);
		}
	   if(mailFilter.test(email)){
		 $("#error_email").fadeOut(500);
	   }else{
		var error = true;
		$("#error_email").fadeIn(500);
	   }
	   if(message.length < 5){
		  var error = true;
		  $("#error_message").fadeIn(500);
	   }else{
		  $("#error_message").fadeOut(500);
	   }
	   
	   if(error == false){
		 $("#contact").attr({"disabled" : "true"});
		  
		 $.ajax({
		   type: "POST",
		   url : "contact-mail.php",    
		   data: "name=" + name + "&mobile=" + mobile + "&email=" + email + "&subject=" + "Contact Request" + "&message=" + message,
		   success: function(data){    
			if(data == 'success'){
			  $("#btnsubmit").remove();
			  $("#mail_success").fadeIn(500);
			}else{
			  $("#mail_failed").html(data).fadeIn(500);
			  $("#contact").removeAttr("disabled").attr("value", "send");
			}     
		   }  
		 });  
	  }
		  return false;                      
	});  
	
	$("#req-demo-submit").click(function(){
		var name   = $("#name").val();
		var mobile   = $("#mobile").val();
		var email  = $("#email").val();
		var message  = $("#message").val();
  
		var mailFilter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
		var mobileFilter = /^\+?[0-9]*\.?[0-9]+$/;
  
		var error = false;
  
		  if(name.length < 4){
			  var error = true;
			  $("#error_name").fadeIn(500);
		  }else{
			  $("#error_name").fadeOut(500);
		  }
		  if(mobileFilter.test(mobile)){
			  $("#error_mobile").fadeOut(500);
		  }else{
			  var error = true;
			  $("#error_mobile").fadeIn(500);
		  }
		 if(mailFilter.test(email)){
		   $("#error_email").fadeOut(500);
		 }else{
		  var error = true;
		  $("#error_email").fadeIn(500);
		 }
		 if(message.length < 5){
			var error = true;
			$("#error_message").fadeIn(500);
		 }else{
			$("#error_message").fadeOut(500);
		 }
		 
		 if(error == false){
		   $("#req-demo-submit").attr({"disabled" : "true"});
			
		   $.ajax({
			 type: "POST",
			 url : "req-demo-mail.php",    
			 data: "name=" + name + "&mobile=" + mobile + "&email=" + email + "&subject=" + "Demo Request" + "&message=" + message,
			 success: function(data){    
			  if(data == 'success'){
				$("#btnsubmit").remove();
				$("#mail_success").fadeIn(500);
			  }else{
				$("#mail_failed").html(data).fadeIn(500);
				$("#req-demo-submit").removeAttr("disabled").attr("value", "send");
			  }     
			 }  
		   });  
		}
			return false;                      
	  });  
	

  });
