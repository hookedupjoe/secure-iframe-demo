# secure-iframe-demo
Example of doing cross domain messages using a secure iframe

# To use
* clone and use npm install then npm start
* Will start 2 web servers, 7001 and 7002
* Open http://localhost:7002/
* Click the Send Hello link, which sends hello to parent frame and gets back a message

# So what is so secure about it?
This example includes and checks the origin to assure all transactions are from known entities

# Original source code
From this blog ..
http://www.panda-os.com/blog/2015/03/communicate-iframe-parent-window/
* This version is not secure, it uses (*) on send and does not use origin
* Used the window back/forth code from this blog