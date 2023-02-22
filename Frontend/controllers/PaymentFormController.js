let baseURL = "http://localhost:8080/Backend_war";

getAllPaymentDetails();
function getAllPaymentDetails() {
    $("#paymentTable").empty();
    $.ajax({
        url: baseURL + "/payment/get_all_payment_details", success: function (res) {
            for (let c of res.data) {

                let payment_id = c.paymentId;
                let invoice_no = c.invoiceNo;
                let date = c.booking.returnDate;
                let booking_id = c.booking.bookingId;
                let payment_type = c.paymentType;
                let amount = c.amount;

                let row = "<tr>"
                    + "<td>" + payment_id + "</td>"
                    + "<td>" + invoice_no + "</td>"
                    + "<td>" + date + "</td>"
                    + "<td>" + booking_id + "</td>"
                    + "<td>" + payment_type + "</td>"
                    + "<td>" + amount + "</td>"
                    + "</tr>";
                $("#paymentTable").append(row);
            }
            // bindRowClickEvents();
            // clearTextFields();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}