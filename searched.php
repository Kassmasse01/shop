<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
    header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
    
  include_once("dbconnector.php");
  $recived_data = json_decode(file_get_contents("php://input"));
  $inputData    = $recived_data->action;

  $sql = "select * from product WHERE id='$inputData%'";
  $result = mysqli_query($db,$sql);
  echo '[';
  for ($i=0; $i < mysqli_num_rows($result) ; $i++) { 
     echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
  }
  echo ']';
?>