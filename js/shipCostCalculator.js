$(document).ready(function () {
    $("form").submit(function () {

        var bookWt = $("[name=bookWeight]").val();
        var bookAmt = $("[name=bookAmount]").val();
        var shipMtd = $(":selected").val();
        var shipTime = $(":radio:checked").val();
        var message = "";

        message += "Book Weight (kg): " + bookWt + "\n";
        message += "Number of books: " + bookAmt + "\n";
        message += "Method: " + shipMtd + "\n";
        message += "Shipping options (days): " + shipTime + "\n";

       //calculation of cost of total book weight
       var totalCost = bookWt * bookAmt * 0.5;

        if (shipMtd == "air") {
            totalCost += 30;
        } else {
            totalCost += 40;
        }

        if (shipTime == "1-2") {
            totalCost += 40;
        } else if (shipTime == "3-5") {
            totalCost += 25;
        } else {
            totalCost += 10;
        }

        message += "\nExtra additions: ";
        $("[name='extra[]']:checked").each(function () {
            var extra = $(this).val();
            message += extra + " ";

            if (extra == "better box") {
                totalCost += 10;
            } else if (extra == "weekend delivery") {
                totalCost += 15;
            } else {
                totalCost += 15;
            }
        });


        if (bookAmt > 3) {
            totalCost = totalCost * 0.9;
        }

        message += "\n\n The total shipping cost is $" + totalCost.toFixed(2);

        var strconfirm = confirm(message);
        if (strconfirm == true) {
            return true;//submit the page
        } else {
            return false;//stay on the page
        }
    });
});


