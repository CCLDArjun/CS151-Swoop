# Swoop

**Group #9**

**Group Members:** Oscar Diaz Vega, Arjun Bemarkar, and Shreyass Prem Sankar 

# Project Presentation Contributions
- **Oscar**: In charge of leading the live project demo, as well as creating the design patterns section of the project's slideshow.
- **Arjun**: In charge of presenting the design patter section, as well as creating the Swoop application timeline section of the project's slideshow.
- **Shreyass** In charge of presenting the introduction of our project, as well as creating the introduction section of the project's slideshow.

# Project Contributions
- **Oscar**:
  - Developed the login/signup back-end and front-end logic
  - The driver side of the project 
    - Trip creation
    - Trip API calls to Bing Maps API
    - The View Trips page
  - The View Profile Page
  - The Home Page
- **Arjun**
  - Added ability to add rides to backend
  - Added ability to add users to rides to the backend
  - Wrote code to fetch and format data for viewImpact.js
  - Worked on database to create relationship between Driver, Rider and Ride
- **Shreyass**
  - Implemented navbar
  - Worked on Rider side of the project
    - Our mission page
    - set carbon goals slider/page
    - request ride page(taken and modified from Driver's side for consistency)
    - frontend of view impact graphs for CO2, gas cost, and carbon goal progress
  - Helped source animations for home and ride request page

# Problem Statement

In the United States, automobiles are the primary source of transportation. There are both financial and environmental key factors with traveling by automobile. Swoop provides clear data visualization for these critical factors for any planned trip. With Swoop, you can see a visual representation of carbon emission levels that will be exerted for a planned trip, along with the cost of the trip by using average gas prices. Swoop also provides a carpool option to address carbon pollution levels.


# Assumptions 

We assume that the user knows their trip's origin and destination, which Swoop takes in as input and does calculations with the data. Swoop also assumes that all inputted trips are viable. Meaning that all inputted trips are assumed to be reasonable trips and not a trip from say California to London.

# Operating Environment 

Swoop is a web app available for all users with access to the internet.

# Intended Usage 

Swoop aims to educate its users on the environmental impact their trip will have in order to motivate them to travel via a different method, such as public transportation, if available. It also aims to give its users financial projections on a planned trip so that users can make appropriate financial decisions.

# UML Diagrams

| Diagram       | Description           | Link |
| ------------- |:-------------:| -----:|
| Class      | Contains the class diagrams for all planned classes. | [Class Diagrams](diagrams/CS151-Swoop-ClassDiagram.pdf) |
| User Case      | Shows how we expect drivers and riders to interact with Swoop.    | [User Case Diagram](diagrams/Swoop%20Use%20Case%20Diagram.pdf) |
| State | Visualize the projected work flow of Swoop.   | [State Diagram](diagrams/Swoop%20State%20Diagram.pdf)|
| Sequence | Shows the timing relationship for operations conducted by Swoop.| [Sequence Diagram](diagrams/CS151-SequenceDiagram.pdf) |

# Functionality

Swoop enables ridesharing between drivers and riders taking similar routes to their destinations. This allows the riders to help reduce carbon emissions and for the driver to make better use of their gas while only taking little to no deviation from their usual route.

Swoop also allows users to see visualized data on from their planned/completed trips.

# Operations

As a driver, all you have to do is submit your departure and destination. 

As a rider, you will also submit a departure and destination to request a ride. If the rider's start location is within a 10 mile radius of an existing  planned trip, they have the option to join the ride. Riders can set a carbon saving goal and can see their progress towards their goal with a visualized graph.

Both a driver and a rider can see graphs for the gas cost and carbon footprint of their planned trips. 
# References (optional)
[Bing Maps APIs](https://learn.microsoft.com/en-us/bingmaps/)

