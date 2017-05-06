# Secure IFrame Demo
Author: Joseph Francis (hookedupjoe@gmail.com)

# About this demo
* This is a working example of secure cross domain messaging via an iframe.
* This uses the "message" model, where frame communication is via messages, not via direct access. This is the only way to do cross domain inter-iframe communication and is a clean way for general use
* Due to the fact that another port is considered cross domain, this example will start two simple Node.js servers, one for the parent page (7002) and one for the iframe content (7001).

# To use
* clone and use npm install then npm start
* Will start 2 web servers, 7001 and 7002
* Open http://localhost:7002/
* Click the Send Hello link, which sends hello to parent frame and gets back a message

# How does the security work?
* The check for event.origin when receiving assures the source is a known source.
* The including of the target origin on send assures no communication goes to an unknown source.  Note: The including of the target domain is for sending of sensitive data in an outside environment. 
* The usage of both the check for event.origin and the including on send is a fully secure implementation.

# Original source code
From this blog ..
http://www.panda-os.com/blog/2015/03/communicate-iframe-parent-window/
* This version is not secure, it uses (*) on send and does not check origin when received
* Used the window back/forth code from this blog

# More about iframes and security
https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
