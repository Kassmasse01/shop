<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true ");
    header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
    header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
    
  include_once("dbconnector.php");
  $method = $_SERVER['REQUEST_METHOD'];
  
  switch ($method) {
    case 'GET':
        $sql = "select * from product";
        break;
  }

  $result = mysqli_query($db,$sql);

  if (!$result) {
    http_response_code(404);
    die(mysqli_error($db));
  }

  if($method == 'GET'){
     echo '[';
     for ($i=0; $i < mysqli_num_rows($result) ; $i++) { 
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
     }
     echo ']';
    
  }else {
    echo mysqli_affected_rows($db);
  }
?>