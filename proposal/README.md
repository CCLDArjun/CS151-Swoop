# Swoop

**Team #9**

**Group Members:** Oscar Diaz Vega, Arjun Bemarkar, and Shreyass Prem Sankar 

# Problem Statement

In the United States, automobiles are the primary source of transportation. There are both financial and environmental key factors with traveling by automobile. Swoop provides clear data visualization for these critical factors for any planned trip. With Swoop, you can see a visual representation of carbon emission levels that will be exerted by a vehicle, the amount of gas exerted, the cost of the trip by using real-time average gas prices, and a side-by-side comparison between the cost of an Uber ride for the planned trip, and the cost of the trip if driven by the user themselves.

# Assumptions 

We assume that the user knows their vehicle’s average miles per gallon, which Swoop takes in as input and does calculations with the data. Swoop also assumes that all inputted trips are viable. Meaning that all inputted trips are assumed to be reasonable trips and not a trip from say California to London.

# Operating Environment 

Swoop is a web app available for all users with access to the internet.

# Intended Usage 

Swoop aims to educate its users on the environmental impact their trip will have in order to motivate them to travel via a different method, such as public transportation, if available. It also aims to give its users financial projections on a planned trip so that users can make appropriate financial decisions.

# High-level Description

We plan on using JavaFX’s java. scene. chart package to create visual charts that display data for a driver and rider’s planned trip. More specifically, we plan to create linear charts using the inputted miles per gallon value and real-time average fuel prices to show the cost of a planned trip. We also plan on using data from Climatiq.io to get carbon emission data for our riders’ and drivers’ planned trips. For the ridesharing feature, we plan on utilizing the Carpoolworld.com API, to match drivers and riders with similar origins and destinations.

# Functionality

Swoop enables ridesharing between drivers and riders taking similar routes to their destinations. This allows the riders to help reduce carbon emissions and for the driver to make better use of their gas while only taking little to no deviation from their usual route. The monetary incentive for each side is for the rider to save money on gas or a more expensive Uber cost, while the driver can make some money with their usual drive. 

Riders can send requests to drivers taking similar routes at least 3 hours before the departure time and drivers can accept these requests at least 1 hour before the departure time. These time slots allow the driver to be fully aware of their riders well before the departure and allows any rider time to book other accommodation should something arise for the driver.



# Operations

Riders and Drivers will have a different UI. 

As a driver, all you have to do is submit your departure, destination, and miles per gallon. 

As a rider, you will see a list of departure and destination options. If both locations match your route to a certain degree, you can book the rideshare. The user can also submit the miles per gallon of their current vehicle to view their amount of reduced carbon emissions or set carbon emission goals per week/month/year.

# References (optional)

Data Visualization via JavaFX: [https](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[://](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[docs](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[.](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[oracle](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[.](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[com](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[/](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[javafx](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[/2/](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[charts](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[/](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[jfxpub](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[-](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[charts](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[.](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)[htm](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm)

CO2 Emissions Data: [https](https://www.climatiq.io/explorer?region=US&search=vehicle)[://](https://www.climatiq.io/explorer?region=US&search=vehicle)[www](https://www.climatiq.io/explorer?region=US&search=vehicle)[.](https://www.climatiq.io/explorer?region=US&search=vehicle)[climatiq](https://www.climatiq.io/explorer?region=US&search=vehicle)[.](https://www.climatiq.io/explorer?region=US&search=vehicle)[io](https://www.climatiq.io/explorer?region=US&search=vehicle)[/](https://www.climatiq.io/explorer?region=US&search=vehicle)[explorer](https://www.climatiq.io/explorer?region=US&search=vehicle)[?](https://www.climatiq.io/explorer?region=US&search=vehicle)[region](https://www.climatiq.io/explorer?region=US&search=vehicle)[=](https://www.climatiq.io/explorer?region=US&search=vehicle)[US](https://www.climatiq.io/explorer?region=US&search=vehicle)[&](https://www.climatiq.io/explorer?region=US&search=vehicle)[search](https://www.climatiq.io/explorer?region=US&search=vehicle)[=](https://www.climatiq.io/explorer?region=US&search=vehicle)[vehicle](https://www.climatiq.io/explorer?region=US&search=vehicle)

CarpoolWorld.com API: https://www.carpoolworld.com/documentation/developer\_api.html

