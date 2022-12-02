<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
    header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
    
  include_once("dbconnector.php");
  $recived_data = json_decode(file_get_contents("php://input"));
  $inputData    = $recived_data->action;
  
  $explode      = explode(':',$inputData);
  $u_name       = reset($explode);
  $id           = end($explode);

  $sql = "UPDATE `shop_data` SET `shop_name`='$u_name' WHERE `id`='$id' ";
  if(mysqli_query($db,$sql)){
    echo "Done";
  }else{
    echo "Try Again";
  }
   
?>