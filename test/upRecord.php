<?php
/**
 * Created by PhpStorm.
 * User: Sarvesh
 * Date: 16-08-2018
 * Time: 18:53
 */


include("connectLocalDB.php");

$id = $_POST['id'];
$newname = $_POST['newname'];

$sql = "UPDATE test SET name ='".$newname."' WHERE id=".$id;
$query = mysqli_query($conn, $sql);

?>