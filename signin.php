<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Credentials: true ");
  header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
  header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
  

$Url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
if($Url == "http://192.168.43.30/shop/signin.php"){

   class LoginException extends Exception {};
   class LoginOutputException extends Exception {};

  class sql
  {
    function __construct($user,$pass)
    {
      $input = $this->checkresult($user,$pass);
      try {
        $explode  = explode(':',$input);
        $data     = end($explode);
        $main     = reset($explode);
        if($main == "Accepted"){
          echo "Accepted+".$data;
          $_SESSION['s_id'] = $data;
        }else if($input == "Error"){
          throw new LoginOutputException("Error");
        } else if($input == "Pay"){
          throw new LoginOutputException("Please Pay");
        }
      } catch (LoginOutputException $LOE) {
        echo $LOE->getMessage();
      }

    }
     protected function checkresult($user,$pass){
        include_once("dbconnector.php");
        $Uid         =  mysqli_real_escape_string($db,$user);
        $Pwd         =  mysqli_real_escape_string($db,$pass);
        $sql         = "SELECT * FROM shop_data WHERE u_name = '$Uid'";
        $result = mysqli_query($db,$sql);
        $resultcheck = mysqli_num_rows($result);
        $row = mysqli_fetch_assoc($result);
        $date       = date("ymd");
        $s_id       = $row['shop_code'];
        try {
          if($resultcheck == 1){
            $dhp = password_verify($Pwd,$row['shop_password']);
            if($dhp == true){
                $acc  = "Accepted";
                return $acc.":".$s_id;
            }else{
              throw new LoginException("Error");
            }
          }else{
             throw new LoginException("Error");
          }
        } catch (LoginException $LE) {
            return $LE->getMessage();
        }

     }
  }


  $recived_data = json_decode(file_get_contents("php://input"));
  $inputData    = $recived_data->action;

  $checking = explode(':',$inputData);
  $pass     = end($checking);
  $user     = reset($checking);

  $sql = new sql($user,$pass);

}else{
    
}
?>