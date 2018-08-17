<?php
/**
 * Created by PhpStorm.
 * User: Sarvesh
 * Date: 16-08-2018
 * Time: 18:53
 */


include("connectLocalDB.php");

$new_name = $_POST['newName'];
$sql = "INSERT INTO test (name) VALUES ('$new_name')";
$query = mysqli_query($conn, $sql);
echo "done";

?>