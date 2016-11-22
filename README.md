# UQLibrary
Application Name: UQ Library App

Assumptions:
1. It’s assumed that the node is already installed in the machine. If not please download and install node.
2. Run the following command to install corsproxy globally (corsproxy is to create proxy server):
Npm install corsproxy -g

Application Dependency:
Application is using grunt as a task runner to minify all the javascript files and run a local server to host the application.
Corsproxy plugin is used to avoid CORS issues while calling rest APIs

how to run the app:
  Run npm install on command line.
 Run grunt on command line.
After that run corsproxy command on command line.

Once done, hit localhost:9000 to access the application.



RUN use case for Karma Jasmine:

Aside from the initial setup and configuration typical interaction with Karma will be to run "karma start" in a terminal window.



//observations and challenges while working

1. No key was available for matching the data between library_hours and computer_availability API. Only name was available for matching the records and names in both the APIs were not consistent. 
Ideally, there should be a matching key instead of a name as it is more reliable.
 Also, if in future there is a need to call API for a specific id , it can be easily done like computer_availability/id

2. Availability in computer_availability API is an object, so had to first convert it into an Array and then iterate through it to get the total availability.

3. Calling the APIs were giving CORS errors, so had to create a proxy server to successfully call the APIs.
