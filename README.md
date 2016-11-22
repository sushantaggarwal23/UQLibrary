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

