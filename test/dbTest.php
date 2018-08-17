<?php
/**
 * Created by PhpStorm.
 * User: Sarvesh
 * Date: 16-08-2018
 * Time: 17:10
 */

include("connectLocalDB.php");

$sql = "SELECT * from test t";
$result = $conn->query($sql);

//echo $result;

$content = '';
$content .= '<div>';

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $content .= 'ID : ';
        $content .= $row["id"];
        $content .= ' | Name : ';
        $content .= $row["name"];
        $content .= '<br>';
    }
}
$content .= '</div>';

echo $content;

?>