# Nodejs api calls with https and request modules

## 1.1. Why nodejs?
- Open Source Runtime Environment
- Event-Driven Single-Threaded Architecture
- Excellent for interacting with high volume of client request
- Less good at handling a large number of db queries
- Shallow Learning Curve

## 1.2. Getting Started with nodejs
- Assumes you know how to
  - access a Linux terminal,
  - update your Linux distribution,
  - install packages from the command line,
  - make and move between directories,
  - create and edit files, and
  - use root access if necessary.


### 1.2.1 Get and install packages.
```bash 
apt-get install nodejs npm git
```
### 1.2.2 Use npm to install libraries and modules you'll use in the demo
```bash 
npm install request async
```
### 1.2.3 Create and change to your working directory
### 1.2.4 Replicate the files in your working directory
```bash
git clone https://github.com/Anant/example-nodejs-api-calls-with-https-and-request.git
```
### 1.2.5 Initialize the node
```bash 
node app.js
```
### 1.2.5 Navigate in your browser to http://localhost:3000/node 
You should receive a response from the weather.gov api specified in the Javascript file you cloned. The message should indicate that you are not an authorized user of the api. 
To correct that you'll have to make some changes in the NodeJSCall.js file

### 1.2.6 Make sure to kill the server running on your terminal by hitting cntrl+C

## 2.1 Configure the user-agent agent header
### 2.1.2 In the NodeJSCall.js file on line 7, change the uniqueID to something of yours, and add your email address.
- This effectively allows the api to know and track who is making calls to their interface
- Your unique ID can be anything, it doesn't need to identify you. Your github username is a good default.

### 2.1.3 In the Request.js file on line 7, change the uniqueID and your email
### 2.1.4 Reinitialize the node from your terminal
```bash 
node app.js
```
### 2.2 Navigate back to http://localhost:3000/node or http://localhost:3000/request to see the results of your api calls.  
You should see weather data displayed at both!

### 2.3 Always remember to shut down the node with cntrl-c before letting your computer idle.

Thanks for following along with the demo. We have just scrated the surface of this topic, and I hope you got something out of it!
If you have questions or comments, we are always interested in hearing them!
