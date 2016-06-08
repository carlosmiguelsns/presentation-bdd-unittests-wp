Set up your environment (node modules)
1 - npm install -g selenium-standalone@latest (require: java needs to be install on SO)
2 - selenium-standalone install
3 - npm install -g webdriverio
4 - npm install -g mocha
5 - npm install chai (install inside your project folder)

Create wdio.conf.js
wdio config (console)

Run unit tests (console)
1 – open console and start the server by runing: selenium-standalone start
2 – Go to C:\[your-path]\tests\
3 – open another console window and run: wdio wdio.conf.js