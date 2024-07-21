## *QuickTrack**

TThis application is a simple activity tracker application which logs the list of activities done by a user with the start time, end time and duration and an option to delete


- ```src/index.html``` : This is the root HTML document
- ```src/js/index.js```: This Javascript file has the code 
- ```src/css/style.css```: All the required css is in this file
- 
**Instructions**

- **Development** : Run `npm run dev` - This will start the development server and open the app in the default browser. You can then work with the files in the src/ folder and can see instant updates in the browser.
  
- **Production Build**: Run `npm run build` - This will produce a build edition that you can then deploy on the cloud/host on a static file service such as GitHub pages or surge.sh.  We recommend trying https://surge.sh for deploying static apps. Please note that the build also copies down the mockServiceWorker.js file into the dist folder. You can safely remove this file from the dist folder before deploying your app.
