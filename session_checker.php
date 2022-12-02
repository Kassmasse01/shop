<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Credentials: true ");
  header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
  header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
  
  include_once('signin.php');
   echo $_SESSION['s_id'];
 if(isset($_SESSION['s_id'])){
    echo "True";
 }else{
    echo "False";
 }

?>