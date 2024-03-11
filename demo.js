
var daySelect = document.getElementById("day");
var monthSelect = document.getElementById("month");
var yearSelect = document.getElementById("year");


for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    daySelect.add(option);
}

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

for (var i = 0; i < 12; i++) {
    var option = document.createElement("option");
    option.text = months[i];
    option.value = i + 1;
    monthSelect.add(option);
}

var currentYear = new Date().getFullYear();
for (var i = 1900; i <= currentYear; i++) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    yearSelect.add(option);
}

daySelect.selectedIndex = new Date().getDate() - 1; 
monthSelect.selectedIndex = new Date().getMonth(); 
yearSelect.selectedIndex = currentYear - 1900+1;