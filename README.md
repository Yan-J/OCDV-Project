# OCDV-Project

OCDV Portal is a web-app made for The New York City Mayor's Office to Combat Domestic Violence (OCDV). 

The technique stack is MEAN Stack, which represents for  "MongoDB", "Express", "AngularJS" and  "Node.js".

**What we have:**  
  
We have already implement a template front end design and a backend for register, login functions and map services. The frontend is currently html with plain JavaScript. For our backend, we implemented it in Node.js with Express and MongoDB. Also, the map service leverages Google Map APIs to display map views.
  
_Front End:_  
For now, our interface design contains mainly four parts,

1) The information pages that provide various resources and information that users might need, including locations of Family Justice Centers, testimonials, technology tips for using the app safely, etc. 

2) The OCDV portal that users can log in, upload and manage their records of incidences, evidences of being abused, and keep track of their court days, etc. The evidence login pages are maintained by OCDV-Team2. 

3) Escape button: This function is to help users quickly close our website without any trace in case the abusers suddenly come. By clicking this button, user will be redirected to a new tab and redirects the old page to google to hide the browsing history.

4) The OCDV Map Service: This is one of the most important services that we provide. Users can easily get information about nearby services, eg. police stations, hospitals, shelters, and display the information visually on an interactive map, by just entering their zipcode or nearby subway station's name. The map extracts data from the database and display them on a map through Google Map APIs. 

Please contact Yan (yj334@cornell.edu) for more information about front end.

_Back End:_   
According to what we get from Family Justice Center (FJC), we have implemented a completed register, login and authenticate functions, where the user information will be written into MongoDB. We ask for users' email, name, phone and password (which has been encrypted for security reason).  

Also, for the map feature, I have already collected data given by OCDV people in excel form as you may want to deploy your local database for test, which would be quite easy to import from excel.  

The map feature is to ask user choose their start point(zipcode) and what kind of service information they need and then show them how to get their and all relative info. Due to the personal reason of one of our teammates, the start-point selection function hasn't been implemented yet.  

Please contact Molly (mz468@cornell.edu) for more information about backend.  


