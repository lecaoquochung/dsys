<?php
include("config.php"); 
//including config.php in our file

if(!empty($_POST['username']) && !empty($_POST['password'])){
	// Now checking user name and password is entered or not.
	echo '<pre>'.print_r($_REQUEST).'</pre>';
	$user = $_POST['username'];
	$pass = $_POST['password'];
	$check = "SELECT * from users where username = '".$user."'";
	$qry = mysql_query($check);
	$num_rows = mysql_num_rows($qry); 
	
	if($num_rows > 0){
		// Here we are checking if username is already exist or not.
		echo "The username you have entered is already exist. Please try another username.";
		echo '<a href="signup.php">Try Again</a>';
		exit;
	}
	
	// Now inserting record in database.
	$query = "INSERT INTO users (username,password) VALUES ('".$user."','".$pass."');";
		mysql_query($query);
		echo "Thank You for Registration.";
		echo '<a href="register.html">Click Here</a> to login you account.';
	exit;
}

?>
<html>
<head>
<title>Registration Page | Simple login form</title>
<link rel="stylesheet" type="text/css" href="style.css" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>
<div id="containt" align="center">
<form action="<?php $_SERVER['PHP_SELF']?>" method="post" id="theForm">
<div id="header"><h2 class="sansserif">User Registration</h2></div>
 <table>
             
    <tr>
      <td>Select Your Username:</td>
      <td> <input type="text" name="username" size="20"></td>
    </tr>
             
    <tr>
      <td>Select Your Password:</td>
      <td><input type="password" name="password" size="20"></td>
     </tr>
     <tr>
       <td><input id="theButton" type="submit" value="Sign Up"></td>
        
     </tr>
 </table>
</form>
</div>
</body>
</html>