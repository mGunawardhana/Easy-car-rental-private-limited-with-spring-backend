let baseURL = "http://localhost:8080/Backend_war/driver/";

getAllDrivers();

$("#saveDriver").on('click', function () {
    saveDriver();
});

function saveDriver() {
    let formData = $("#driverFormController").serialize();
    $.ajax({
        url: baseURL + "save_driver", method: "post", data: formData, dataType: "json", success: function (res) {
            getAllDrivers();
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}

function getAllDrivers() {
    $("#driverTableBody").empty();
    $.ajax({
        url: baseURL + "get_all", success: function (res) {
            for (let c of res.data) {

                let id = c.id;
                let firstname = c.name.firstName;
                let lastname = c.name.lastName;
                let address = c.address;
                let drivingLicenseNo = c.drivingLicenseNo;
                let email = c.email;
                let contactNo = c.contactNo;
                let driverAvailability = c.driverAvailability;
                let userName = c.user.userName;
                let user_id = c.user.userId;
                let nic = c.nic;
                let password = c.user.password;

                let row = "<tr>"
                    + "<td>" + id + "</td>"
                    + "<td>" + firstname + "</td>"
                    + "<td>" + lastname + "</td>"
                    + "<td>" + address + "</td>"
                    + "<td>" + drivingLicenseNo + "</td>"
                    + "<td>" + email + "</td>"
                    + "<td>" + contactNo + "</td>"
                    + "<td>" + driverAvailability + "</td>"
                    + "<td>" + userName + "</td>"
                    + "<td>" + user_id + "</td>"
                    + "<td>" + nic + "</td>"
                    + "<td>" + password + "</td>"
                    + "</tr>";

                $("#driverTableBody").append(row);
            }

            bindRowClickEventsForDriver();            // clearTextFields();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$("#deleteDriver").on('click', function () {
    $.ajax({
        url: baseURL + "?code=" + $("#id").val(), method: "delete", dataType: "json", success: function (resp) {
            getAllDrivers();
            alert(resp.message);
        }, error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});

$("#updateDriver").on('click', function () {

    //TODO implement this

    var driver = {


    }

    $.ajax({
        url: baseURL + "update",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(driver),
        dataType: "json",
        success: function (res) {
            getAllDrivers();
            alert(res.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});

function bindRowClickEventsForDriver() {
    $("#driverTableBody>tr").on('click', function () {
        $('#id').val($(this).children(":eq(0)").text());
        $('#firstName').val($(this).children(":eq(1)").text());
        $('#lastName').val($(this).children(":eq(2)").text());
        $('#address').val($(this).children(":eq(3)").text());
        $('#drivingLicenseNo').val($(this).children(":eq(4)").text());
        $('#email').val($(this).children(":eq(5)").text());
        $('#contactNo').val($(this).children(":eq(6)").text());
        $('#driverAvailability').val($(this).children(":eq(7)").text());
        $('#userName').val($(this).children(":eq(8)").text());
        $('#userId').val($(this).children(":eq(9)").text());
        $('#nic').val($(this).children(":eq(10)").text());
        $('#password').val($(this).children(":eq(11)").text());

    });
}