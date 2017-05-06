# secure-iframe-demo
Example of doing cross domain messages using a secure iframe

# To use
* clone and use npm install then npm start
* Will start 2 web servers, 7001 and 7002
* Open http://localhost:7002/
* Click the Send Hello link, which sends hello to parent frame and gets back a message

# So what is so secure about it?
This example includes and checks the origin to assure all transactions are from known entities
