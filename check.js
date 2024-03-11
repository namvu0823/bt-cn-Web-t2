document.addEventListener("DOMContentLoaded", function() {
    var signUpButton = document.querySelector(".sign_up");

    signUpButton.addEventListener("click", function() {
        var firstName = document.getElementById("textbox_name").value.trim();
        var surname = document.getElementById("textbox_surname").value.trim();
        var mobileOrEmail = document.getElementById("textbox_mobile_email").value.trim();
        var newPassword = document.getElementById("textbox_password").value.trim();
        var daySelect = document.getElementById("day");
        var monthSelect = document.getElementById("month");
        var yearSelect = document.getElementById("year");
        var errorMessage = document.getElementById("error_message");

        errorMessage.style.display = "block";

        if (firstName === "") {
            errorMessage.innerHTML = "Thiếu thông tin First name";
            document.getElementById("textbox_name").focus();
            return;
        }

        if (surname === "") {
            errorMessage.innerHTML = "Thiếu thông tin Surname";
            document.getElementById("textbox_surname").focus();
            return;
        }

        if (mobileOrEmail === "") {
            errorMessage.innerHTML = "Thiếu thông tin Mobile number or email address";
            document.getElementById("textbox_mobile_email").focus();
            return;
        }

        if (newPassword === "") {
            errorMessage.innerHTML = "Thiếu New password";
            document.getElementById("textbox_password").focus();
            return;
        }

        var day = parseInt(daySelect.value);
        var month = parseInt(monthSelect.value);
        var year = parseInt(yearSelect.value);

        if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
            errorMessage.innerHTML = "Vui lòng chọn ngày tháng năm hợp lệ";
            return;
        }

        var gender = document.querySelector('input[name="gender"]:checked');

        if (!gender) {
            errorMessage.innerHTML = "Vui lòng chọn giới tính";
            return;
        }
        alert("Dữ liệu đã hợp lệ. Trang sẽ được đóng sau khi nhấn OK.");
        window.close(); // Thoát khỏi trang
    });
});
