/* Basic Estimated Annual Consumption Calculator */

var oneDay, startDate, endDate, daysCovered, totalConsumption, dailyConsumption, annualConsumption;

init();


document.querySelector(".calculate-button").addEventListener("click", function() {
    oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    startDate = new Date(document.querySelector(".date-start").value);
    endDate = new Date(document.querySelector(".date-end").value);
    totalConsumption = document.querySelector("#usage").value;

    if(endDate > startDate && totalConsumption) {

    daysCovered = Math.round(Math.abs((startDate.getTime() - endDate.getTime())/(oneDay)));



    dailyConsumption = totalConsumption / daysCovered;

    annualConsumption = dailyConsumption * 365;

    document.querySelector(".wrapper-result").style.display = "block";
    document.querySelector("#total-days").textContent = daysCovered;
    document.querySelector("#daily-consumption").textContent = Math.round(dailyConsumption);
    document.querySelector("#eac-consumption").textContent = Math.round(annualConsumption);

    } else {
        alert("Please ensure end date is greater than start date and that you have filled in consumption.");
    }
});



function init() {
    document.querySelector(".wrapper-result").style.display = "none";
}
