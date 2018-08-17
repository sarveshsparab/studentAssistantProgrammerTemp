$(function () {
    $.ajax({
        url: "dbtest.php",
        success: function (result) {
            if(result == 'ERROR'){
                console.error("Error : No rows returned from the table | Result : "+result);
            }else {
                $("#dbResult").html(result);
            }
        },
        error: function () {
            console.error("Error : In AJAX call for fetching quotation");
        }
    });
});

$("newAddForm").on("submit", function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "addnew.php",
        data: {
            newName:newName
        },
        success: function (result) {
            if(result == 'ERROR'){
                console.error("In AJAX call for inserting");
            }else {
                console.log("Inserted");
            }
        },
        error: function () {
            console.error("Error : In AJAX call for inserting");
        }
    });
});