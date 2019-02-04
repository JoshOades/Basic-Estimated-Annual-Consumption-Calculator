# Basic-Estimated-Annual-Consumption-Calculator
Basic Estimated Annual Consumption Calculator

To accurately price power (electricity) and gas for our clients we need to know their level of energy consumption. We always use an annual figure when pricing for ease of comparability. 

Our clients will typically be billed either monthly or quarterly.

We calculate their Estimated Annual Consumption (EAC) by extrapolating an annual quantity from one of these bills.

We do this by

1)Determining the number of days covered by the bill by calculating the days between the start and end date for the bill.
2)Finding the total energy consumption (kWh) for the bill period
3)Dividing the total consumption by the number of days in the period to determine the daily consumption value.
4)Multiplying the daily value by 365 to calculate an EAC.

We would like an easy to use javascript tool that will allow us to enter bill dates and consumption and calculate the EAC for us. We will not require any DB functionality.


