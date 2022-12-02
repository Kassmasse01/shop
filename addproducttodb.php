<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
    header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
    
  include_once("dbconnector.php");
  $recived_data = json_decode(file_get_contents("php://input"));
  $inputData    = $recived_data->action;
  $explode      = explode(':',$inputData);
  $pro_name     = reset($explode);
  $another      = end($explode);
  $explode_1    = explode('?',$another);
  $img_name     = reset($explode_1);
  $U_id         = end($explode_1);

  
  $sqlselect = "SELECT * FROM shop_data where id='$U_id'";
  $result    =  mysqli_query($db,$sqlselect);
  $rows      = mysqli_fetch_assoc($result);
  $shop_name = $rows['shop_name'];
  $shop_code = $rows['shop_code'];

  if(strlen($pro_name) > 1){
    $sql = "INSERT INTO `product`(`product_name`, `shop_name`, `shop_code`,`product_img`) VALUES ('$pro_name','$shop_name','$shop_code','$img_name')";
     if(mysqli_query($db,$sql)){
        echo "Product Added";
      }
      else{ echo "Error ON adding your product";}
  }

  
?>