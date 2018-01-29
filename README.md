# OCDV-Project

OCDV Portal is a web-app made for The New York City Mayor's Office to Combat Domestic Violence (OCDV). It's currently deployed on AWS: http://ocdvportal.nyc/

The technique stack is MEAN Stack, which represents for  "MongoDB", "Express", "AngularJS" and  "Node.js".

**What we have:**  
  
We have already implement a template front end design and a backend for register and login functions. The frontend is currently html with plain JavaScript. For our backend, we implemented it in Node.js with Express and MongoDB.  

Also, we did map feature research last semester. More details could be found in the following content.
  
_Front End:_  
Our front end design is currently implemented with Angular 2. For now, our interface design contains mainly three parts,

1) The information pages that provide various resources and information that users might need, including locations of Family Justice Centers, testimonials, technology tips for using the app safely, etc. 

2) The OCDV portal that users can log in, upload and manage their records of incidences, evidences of being abused, and keep track of their court days, etc. The portal is not fully functional yet within the newly deployed version on AWS. We'll fix that soon.

3) Escape button: This function is to help users quickly close our website without any trace in case the abusers suddenly come. By clicking this button, user will be redirected to a new tab and redirects the old page to google to hide the browsing history.

We are also working on a new design with improved user experience. This version is currently in prototype. Please contact Yan (yj334@cornell.edu) for more information about front end.

_Back End:_   
According to what we get from Family Justice Center (FJC), we have implemented a completed register, login and authenticate functions, where the user information will be written into MongoDB. We ask for users' email, name, phone and password (which has been encrypted for security reason).  

Also, for the map feature, I have already collected data given by OCDV people in excel form as you may want to deploy your local database for test, which would be quite easy to import from excel.  

The map feature is to ask user choose their start point(zipcode) and what kind of service information they need and then show them how to get their and all relative info. Due to the personal reason of one of our teammates, the start-point selection function hasn't been implemented yet.  

Please contact Molly (mz468@cornell.edu) for more information about backend.  


