## Setting Up Flatacuties
This is an application that allows counting of votes via the webpage using a local API json server building out the frontend structure of the app

## Run the application
Clone the repository using GIT
https://github.com/Koech-Eugene/Flatacuties.git

Navigate into the directoy in your local machine

To run  app you will a json server as that is where the data is stored.
Open the terminanl and run:
npm install -g json-server
After it is install start the server for it to watch for any changes:
json-server --watch db.json

Test your server by using: 
http://localhost:3000/characters

Then, open the index.html file on your browser to run the application.

Write your code in the js/script.js file. 
The base URL for your API will be:
 http://localhost:3000.


## NOTE
There are still some implementation still working on to achieve full functionality of the app
eg: form to add other animals, reset button for the votes 