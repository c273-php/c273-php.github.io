/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    $(".alert").hide();
    $("#form").submit(function (evt) {

        var message = "";

        var name = $("[name=name]").val();
        if (name === "") {
            message += "- Name is required.<br/>";
        }

        var genderSel = $("[name=gender]:checked").length;
        if (genderSel === 0) {
            message += "- Gender is required.<br/>";
        }

        var colorSel = $(".chkboxlist:checked").length;
        if (colorSel === 0) {
            message += "- At least one color is required.<br/>";
        }

        var postalCode = $("[name=postalcode]").val();
        if (postalCode === "") {
            message += "- Postal Code is required.<br/>";
        } else if ((/^[0-9]{6}$/).test(postalCode) === false) {
            message += "- You must enter a valid postal code.<br/>";
        }

        var country = $("[name=selCountry]").val();
        if (country === "") {
            message += "- Country is required.<br/>";
        }

        var phone = $("[name=phone]").val();
        if (phone === "") {
            message += "- Phone is required.<br/>";
        } else if ((/^[6][0-9]{7}$/).test(phone) === false) {
            message += "- You must enter a valid phone.<br/>";
        }

        var email = $("[name=email]").val();
        if (email === "") {
            message += "- Email is required.<br/>";
        } else if ((/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/).test(email) === false) {
            message += "- You must enter a valid email.<br/>";
        }

        var password = $("[name=pwd]").val();
        if (password === "") {
            message += "- Password is required.<br/>";
        } else if ((/^[A-Za-z\d]{6,8}$/).test(password) === false) {
            message += "- You must enter a valid password.<br/>";
        }

        var verifyPassword = $("[name=verifyPwd]").val();
        if (verifyPassword === "") {
            message += "- Confirm password is required.<br/>";
        } else if (password !== "" && password !== verifyPassword) {
            message += "- Passwords do not match.<br/>";
            $("[name=pwd]").val("");
            $("[name=verifyPwd]").val("");
        }

        if (message.length > 0) {
            $(".alert").html(message);
            $(".alert").show();

            return false;
        }
    });
});