# Boilerplate-React-Owa
> An front-end React OpenMRS admin OWA app boilerplate for development.

## Features
- React OpenMRS Admin OWA App scaffold
- OpenMRS Admin OWA UI layout styling
- React components testing with Jest framework
- Support I18N
- Js code formatted with Prettier code formatter

## Preview Scaffold OWA App
> https://boilerplate-owa.herokuapp.com

## Developer Guide
> This OWA uses [yarn](https://yarnpkg.com/en/) as a package manager and for its build tasks.
#### Local dev setup

##### 1. After cloning the project, move into the /boilerplate-react-owa directory:
```bash
cd boilerplate-react-owa/
```

##### 2. Install the yarn dependencies:
```bash
$ yarn install
```

##### 3. Compile the code and build the artifacts:
**For development 'watching mode'**
```bash
$ yarn webpack
```
This command also triggers the watch mode for debugging. This means that any changes will trigger an update to the main app.js in order to hot-deploy changes while developing.

**For production**
```bash
$ yarn buuild
```
This command minified bundles for production.

**The output of the build should be in**
- **owa/app/build/app.js**
- **owa/app/build/vendor.js**

##### 4. Deployment for runtime debugging:

Start by accessing the OWA settings admin page at **/openmrs/module/owa/settings.form** on your runtime instance of OpenMRS. 
> Note that the Open Web Apps module must be installed, see [here](https://wiki.openmrs.org/x/C4KIBQ) for more information.

The key setting is the 'App Folder Path' owa apps.Typically the location for all OWAs of your OpenMRS instance should be in **/opt/openmrs/owa**, the idea would be to symlink the content of the OWA app to your code repo:
```bash
ln -s /path/to/../boilerplate-react-owa/app /opt/openmrs/owa/boilerplate
```
This is assuming that Tomcat is able to serve symlinked content. 
If that is not an option, then you will have to _copy_ (instead of symlinking) the content of the **app** folder of your local repository to **/opt/openmrs/owa/boilerplate** each time you want to observe a change that you have made.

![alt tag](https://api.media.atlassian.com/file/264b5514-fa5b-4ae9-a46f-2490a22f9379/image?mode=full-fit&client=d6633dfc-4d2f-4528-97a1-804d6271f5a1&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkNjYzM2RmYy00ZDJmLTQ1MjgtOTdhMS04MDRkNjI3MWY1YTEiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjI2NGI1NTE0LWZhNWItNGFlOS1hNDZmLTI0OTBhMjJmOTM3OSI6WyJyZWFkIl19LCJleHAiOjE1MjA1MjI4NzEsIm5iZiI6MTUyMDUxOTUxMX0.ysBbojKpj55TWZJiqEbPPpi_qzZelz-3bPx2F9s5jBg)

##### 5. Running tests
>This OWA uses [Jest](https://facebook.github.io/jest/) as a test framework.

```bash
$ yarn test
```
If you want to run specific test only
```bash
$ yarn test <regex>
```
Where 'regex' can be used to point to certain targetted test files.

>This OWA uses [snapshot testing](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest).

When it is clear that UI changes are as wanted, the Jest snapshots should be regenerated to be part of the next commit:
```bash
$ yarn test --u
```

##### 6. Running Code formatter
> This use prettier code formatter. Before pushing any code, you should run code formatter.
```bash
$ yarn code:format
```

## Reference Links
- [yarn](https://yarnpkg.com/en/)
- [ReactJs](https://reactjs.org/docs/react-api.html)
- [react-router](https://reacttraining.com/react-router/web/example/basic)
- [Jest](https://facebook.github.io/jest/)
- [Jest-Doc](https://facebook.github.io/jest/docs/en/getting-started.html)
- [enzyme](http://airbnb.io/enzyme/)
- [snapshot testing](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest)
- [prettier-code-formater](https://prettier.io/docs/en/index.html)

## Implemented
- [openmrs-module-bedmanagement](https://github.com/openmrs/openmrs-module-bedmanagement/tree/master/owa)