# Behavior Driven Development in WordPress

### Set up your environment (node modules)
* npm install -g selenium-standalone@latest (require: java needs to be install on SO)
* selenium-standalone install
* npm install -g webdriverio
* npm install -g mocha
* npm install chai (install locally - inside your project folder)

### Create wdio.conf.js
wdio config (run command on the console)

### Run unit tests
* open console and start the server by runing: **selenium-standalone start**
* Go to C:\[your-path]\tests\
* open another console window and run: **wdio wdio.conf.js**
