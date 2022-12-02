<?php
    header("Content-Type: application/json; charset=utf-8");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
    header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
    
  include_once("dbconnector.php");
  
   $recived_data = array();
   $upload_dir   = 'uploads/';
   $server_url   = 'http://localhost/shop/';
   
   if ($_FILES['fileupload']) {
    $img_name = $_FILES['fileupload']['name'];
    $img_tmp_name = $_FILES['fileupload']['tmp_name'];
    $error    = $_FILES['fileupload']['error'];
   
    if($error > 0){
        $recived_data = array(
            'status' => 'error',
            'error'  => true,
            'message' => 'Error Uploading the file',             
           );
    }
    else{
        $random_name =  rand(1000,1000000000).".".$img_name;
        $upload_name =  $upload_dir.strtolower($random_name);
        $upload_name = preg_replace('/\s+/','-',$upload_name);
          
        if (move_uploaded_file($img_tmp_name, $upload_name)) {
            $recived_data = array(
                'status' => 'Success',
                'error'  => false,
                'message' => 'file Uploading Succesfully',
                'url' => $server_url."/".$upload_name,  
                'imgname' => $server_url."/".$upload_name,            
            );
        }else{
            $recived_data = array(
                'status' => 'Error',
                'error'  => True,
                'message' => 'Error Uploading the file',
                'url' => $server_url."/".$upload_name,
                             
            );
        }
    }
   }
    
   echo json_encode($recived_data);
?>