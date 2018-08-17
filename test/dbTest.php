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
$content .= '<div><table border="1">';

if ($result->num_rows > 0) {
    $content .= '<thead><th>ID<th>Name</th><th colspan="2">Options</th></thead>';
    while ($row = $result->fetch_assoc()) {
        $content .= '<tr id="rec"'.$row["id"].'>';
        $content .= '<td>'.$row["id"].'</td>';
        $content .= '<td>'.$row["name"].'</td>';
        $content .= '<td><button onclick="delRecord('.$row["id"].')">Delete</button></td>';
        $content .= '<td><button onclick="upRecord('.$row["id"].')">Update</button></td>';
        $content .= '</tr>';
    }
}
$content .= '</table></div>';

echo $content;

?>