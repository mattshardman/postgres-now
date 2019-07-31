# postgres-now
Super simple postgres set up for deploying to Zeit's now with elephantsql

# Instructions
- [x] Create an [Elephant SQL account](https://www.elephantsql.com) (you can sign up with github) & create two DBs, a production and a development one.
- [x] Download the [now-cli](https://github.com/zeit/now-cli) (you may also need to create an [account on Zeit](https://zeit.co/now), again you can sign up with github).
- [x] Fork and clone this repository
- [x] Replace the POSTGRES_DEV_URL and POSTGRES_PROD_URL environment variables in ```now.json``` with the urls provided on your elephantsql account (the url is in the details section for each db)
- [x] Run ```now dev``` to test locally
- [x] Run ```now``` to deploy

# More info

## now.json
* The now.json file contains information that ```now``` needs about your deployment 
* The ```"builds"``` tells it that it is a node.js application 
* The ```env``` gives it access to your elephant sql urls through environment variables

## package.json
* The ```package.json``` conatains a script called ```now-build``` this gives ```now``` instructions when performing the build of your project while deploying

## now dev
* Allows you to run your project locally using the same environment as when deployed to the cloud
* This makes it much easier to debug (in this case it also gives you access to the env variables which wouldn't be avaiable by just running the start script)

# Links 
* For more info on now - [zeit docs](https://zeit.co/docs)
* And the now node builder - [@now/node](https://zeit.co/docs/v2/advanced/builders/node-js-now-node/)
