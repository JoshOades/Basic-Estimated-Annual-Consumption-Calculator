/* Basic Estimated Annual Consumption Calculator

To accurately price power (electricity) and gas for our clients we need to know their level of energy consumption. We always use an annual figure when pricing for ease of comparability. 

Our clients will typically be billed either monthly or quarterly.

We calculate their Estimated Annual Consumption (EAC) by extrapolating an annual quantity from one of these bills.

We do this by

1)Determining the number of days covered by the bill by calculating the days between the start and end date for the bill.
2)Finding the total energy consumption (kWh) for the bill period
3)Dividing the total consumption by the number of days in the period to determine the daily consumption value.
4)Multiplying the daily value by 365 to calculate an EAC.

We would like an easy to use javascript tool that will allow us to enter bill dates and consumption and calculate the EAC for us. We will not require any DB functionality. */

var oneDay, startDate, endDate, daysCovered, totalConsumption, dailyConsumption, annualConsumption;

init();


document.querySelector(".calculate-button").addEventListener("click", function() {
    oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    startDate = new Date(document.querySelector(".date-start").value);
    endDate = new Date(document.querySelector(".date-end").value);
    daysCovered = Math.round(Math.abs((startDate.getTime() - endDate.getTime())/(oneDay)));

    totalConsumption = document.querySelector("#usage").value;

    dailyConsumption = totalConsumption / daysCovered;

    annualConsumption = dailyConsumption * 365;

    document.querySelector(".wrapper-result").style.display = "block";
    document.querySelector("#total-days").textContent = daysCovered;
    document.querySelector("#daily-consumption").textContent = Math.round(dailyConsumption);
    document.querySelector("#eac-consumption").textContent = Math.round(annualConsumption);
});



function init() {
    document.querySelector(".wrapper-result").style.display = "none";
}
