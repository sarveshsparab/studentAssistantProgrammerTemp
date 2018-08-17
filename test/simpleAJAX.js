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
            console.error("Error : In AJAX call for fetching table data");
        }
    });
});

function addNewFunc () {
    var newName = document.getElementById("newName").value;
    if(newName==null || newName.trim()==""){
        console.error("Error : In inserting blank or empty");
    } else {
        $.ajax({
            type: "POST",
            url: "addnew.php",
            data: {
                newName: newName
            },
            success: function (result) {
                if (result == 'ERROR') {
                    console.error("In AJAX call for inserting");
                } else {
                    console.log("Inserted");
                }
            },
            error: function () {
                console.error("Error : In AJAX call for inserting");
            }
        });
    }
}

function delRecord(id){
    //document.getElementById("rec"+id).style.display='none';
    $.ajax({
        type: "POST",
        url: "delRecord.php",
        data: {
            id: id
        },
        success: function (result) {
            if (result == 'ERROR') {
                console.error("In AJAX call for deleting");
                //document.getElementById("rec"+id).style.display='';
            } else {
                console.log("Deleted");
            }
        },
        error: function () {
            //document.getElementById("rec"+id).style.display='';
            console.error("Error : In AJAX call for deleting");
        }
    });
}

function upRecord(id){
    var newname = prompt("Enter new name");
    $.ajax({
        type: "POST",
        url: "upRecord.php",
        data: {
            id: id,
            newname: newname
        },
        success: function (result) {
            if (result == 'ERROR') {
                console.error("In AJAX call for updating");
            } else {
                console.log("Updated");
            }
        },
        error: function () {
            console.error("Error : In AJAX call for updating");
        }
    });
}