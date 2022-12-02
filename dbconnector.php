<?php
// DB.class.php

class DB {

	protected $db_name = 'shop';
	protected $db_user = 'root';
	protected $db_pass = '';
	protected $db_host = 'localhost';

  public function connect() {

          $this->connect_db = new mysqli( $this->db_host, $this->db_user, $this->db_pass, $this->db_name );

          if ( mysqli_connect_error() ) {
              printf("Connection failed: %s\ ", mysqli_connect_error());
              exit();
          }
          return true;
      }

      public function get_connection() {
          return $this->connect_db;
        }

}

$db = new DB('localhost', 'root', '', 'shop');
$db->connect();
$db = $db->get_connection();

?>