![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template-production/main/doc/landing-page.png)

Meteor-application-template-production is a sample Meteor 2.7.1 application that illustrates:

  * A standard directory layout using 'imports/' as recommended in the [Meteor Guide](https://guide.meteor.com/structure.html)
  * [React Bootstrap](https://react-bootstrap.github.io/) for user interface.
  * [Uniforms](https://uniforms.tools/) for form development.
  * [alanning:roles](https://github.com/alanning/meteor-roles) to implement a special "Admin" user.
  * Authorization, authentication, and registration using built-in Meteor packages.
  * Initialization of users and data from a settings file.
  * Alerts regarding success or failure of DB updates using [Sweet Alert](https://sweetalert.js.org/).
  * Quality assurance using [ESLint](http://eslint.org) with packages to partially enforce the [Meteor Coding Standards](https://guide.meteor.com/code-style.html) and the [AirBnB Javascript Style Guide](https://github.com/airbnb/javascript). We also have unit, integration, and acceptance tests.

The goal of this template is to help you get quickly started doing Meteor development by providing a reasonable directory structure for development and deployment, a set of common extensions to the core framework, and boilerplate code to implement basic page display, navigation, forms, roles, and collection manipulation.

## Installation

First, [install Meteor](https://www.meteor.com/install).

Second, go to [https://github.com/ics-software-engineering/meteor-application-template-react](https://github.com/ics-software-engineering/meteor-application-template-react), and click the "Use this template" button. Complete the dialog box to create a new repository that you own that is initialized with this template's files.

Third, go to your newly created repository, and click the "Clone or download" button to download your new GitHub repo to your local file system.  Using [GitHub Desktop](https://desktop.github.com/) is a great choice if you use MacOS or Windows.

Fourth, cd into the app/ directory of your local copy of the repo, and install third party libraries with:

```
$ meteor npm install
```

## Running the system

Once the libraries are installed, you can run the application by invoking the "start" script in the [package.json file](https://github.com/ics-software-engineering/meteor-application-template-production/blob/main/app/package.json):

```
$ meteor npm run start
```

The first time you run the app, it will create some default users and data. Here is the output:

```
meteor npm run start


> mrbp@ start /Users/carletonmoore/GitHub/ICS314/mrbp/app
> npm-run-all css start-meteor


> mrbp@ css /Users/carletonmoore/GitHub/ICS314/mrbp/app
> npm-run-all css-compile css-prefix


> mrbp@ css-compile /Users/carletonmoore/GitHub/ICS314/mrbp/app
> node-sass --include-path node_modules --output-style compressed --source-map true --source-map-contents true --precision 6 scss -o imports/startup/client/css/

Rendering Complete, saving .css file...
Wrote Source Map to /Users/carletonmoore/GitHub/ICS314/mrbp/app/imports/startup/client/css/theme.css.map
Wrote CSS to /Users/carletonmoore/GitHub/ICS314/mrbp/app/imports/startup/client/css/theme.css
Wrote 1 CSS files to /Users/carletonmoore/GitHub/ICS314/mrbp/app/imports/startup/client/css/

> mrbp@ css-prefix /Users/carletonmoore/GitHub/ICS314/mrbp/app
> postcss imports/startup/client/css/theme.css --replace --use autoprefixer --map


> mrbp@ start-meteor /Users/carletonmoore/GitHub/ICS314/mrbp/app
> meteor --no-release-check --exclude-archs web.browser.legacy,web.cordova --settings ../config/settings.development.json

[[[[[ ~/GitHub/ICS314/mrbp/app ]]]]]          

=> Started proxy.                             
=> Started HMR server.                        
=> Started MongoDB.                           
I20220517-11:01:35.531(-10)? Creating the default user(s)
I20220517-11:01:35.538(-10)?   Creating user admin@foo.com with role ADMIN.
I20220517-11:01:35.700(-10)? Defining ADMIN admin@foo.com with password changeme
I20220517-11:01:35.701(-10)?   Creating user john@foo.com with role USER.
I20220517-11:01:35.766(-10)? Defining USER john@foo.com with password changeme
I20220517-11:01:35.870(-10)? Creating default data.
I20220517-11:01:35.870(-10)?   Adding: Basket (john@foo.com)
I20220517-11:01:35.971(-10)?   Adding: Bicycle (john@foo.com)
I20220517-11:01:35.973(-10)?   Adding: Banana (admin@foo.com)
I20220517-11:01:35.975(-10)?   Adding: Boogie Board (admin@foo.com)
I20220517-11:01:36.162(-10)? Monti APM: completed instrumenting the app
=> Started your app.

=> App running at: http://localhost:3000/
```

### Viewing the running app

If all goes well, the template application will appear at [http://localhost:3000](http://localhost:3000).  You can login using the credentials in [settings.development.json](https://github.com/ics-software-engineering/meteor-application-template-production/blob/main/config/settings.development.json), or else register a new account.

### ESLint

You can verify that the code obeys our coding standards by running ESLint over the code in the imports/ directory with:

```
meteor npm run lint
```

## Walkthrough

The following sections describe the major features of this template.

### Directory structure

The top-level directory structure is:

```
.github     # holds GitHub issue template and a continuous integration action.
app/        # holds the Meteor application sources
config/     # holds configuration files, such as settings.development.json
doc/        # holds developer documentation, user guides, etc.
.gitignore  # don't commit IntelliJ project files, node_modules, and settings.production.json
```

This structure separates documentation files (such as screenshots) and configuration files (such as the settings files) from the actual Meteor application.

The app/ directory has this structure:

```
.deploy/
  mup.sample.js  # Sample Meteor Up deploy script
  settings.sample.json # Sample settings file for deployment.
  
client/
  main.html      # The boilerplate HTML with a "root" div to be manipulated by React.
  main.js        # import startup files.

imports/
  api/           # Define collections
    base/        # Base collection class wrapping the MongoDB collection.
    matp/        # Helper for holding all the collections.
    role/        # Defines the roles in the application.
    stuff/       # The Stuffs collection definition.
    user/        # The AdminProfile, BaseProfile, User, and UserProfile collections.
    utilities/   # Utility functions to load collections.
  startup/       # Define code to run when system starts up (client-only, server-only, both).
    client/
    server/
  test-utilities # Utility functions to help with testing.
  ui/
    components/  # Contains page elements, some of which could appear on multiple pages.
    layouts/     # Contains top-level layout (<App> component).
    pages/       # Contains components for each page.
    utilities/   # Collection of IDs used for components and pages.

node_modules/    # managed by npm

public/          # static assets (like images) can go here.

scss/
  theme.scss     # Bootstrap 5 theme file.
  
server/
   main.js       # import the server-side js files.
```

### Import conventions

This system adheres to the Meteor guideline of putting all application code in the imports/ directory, and using client/main.js and server/main.js to import the code appropriate for the client and server in an appropriate order.

### Application functionality

The application implements a simple CRUD application for managing "Stuff", which is a Mongo Collection consisting of a name (String), a quantity (Number), and a condition (one of 'excellent', 'good', 'fair', or 'poor').

By default, each user only sees the Stuff that they have created.  However, the settings file enables you to define default accounts.  If you define a user with the role "admin", then that user gets access to a special page which lists all the Stuff defined by all users.

#### Landing page

When you retrieve the app at http://localhost:3000, this is what should be displayed:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template-production/main/doc/landing-page.png)

The next step is to use the Login menu to either Login to an existing account or register a new account.

#### Login page

Clicking on the Login link, then on the Sign In menu item displays this page:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template-production/main/doc/signin-page.png)

#### Register page

Alternatively, clicking on the Login link, then on the Sign Up menu item displays this page:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template-production/main/doc/register-page.png)


#### Landing (after Login) page, non-Admin user

Once you log in (either to an existing account or by creating a new one), the navbar changes as follows:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template-production/main/doc/landing-after-login-page.png)

You can now add new Stuff documents, and list the Stuff you have created. Note you cannot see any Stuff created by other users.

#### Add Stuff page

After logging in, here is the page that allows you to add new Stuff:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template-production/main/doc/add-stuff-page.png)

#### List Stuff page

After logging in, here is the page that allows you to list all the Stuff you have created:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template-production/main/doc/list-stuff-page.png)

You click the "Edit" link to go to the Edit Stuff page, shown next.

#### Edit Stuff page

After clicking on the "Edit" link associated with an item, this page displays that allows you to change and save it:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template-production/main/doc/edit-stuff-page.png)

#### Landing (after Login), Admin user

You can define an "admin" user in the settings.json file. This user, after logging in, gets a special entry in the navbar:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template-production/main/doc/admin-landing-page.png)

#### Admin page (list all users stuff)

To provide a simple example of a "super power" for Admin users, the Admin page lists all of the Stuff by all of the users:

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template-production/main/doc/admin-list-stuff-page.png)

Note that non-admin users cannot get to this page, even if they type in the URL by hand.

### Collections

The application implements a single Collection called "Stuffs". Each Stuffs document has the following fields: name, quantity, condition, and username.

The Stuffs collection is defined in [imports/api/stuff/stuff.js](https://github.com/ics-software-engineering/meteor-application-template-production/blob/main/app/imports/api/stuff/stuff.js).

The Stuffs collection is initialized in [imports/startup/server/Mongo.js](https://github.com/ics-software-engineering/meteor-application-template-production/blob/main/app/imports/startup/server/Mongo.js).

### CSS

The application uses the [React implementation of Semantic UI](http://react.semantic-ui.com/).

### Routing

For display and navigation among its four pages, the application uses [React Router](https://reacttraining.com/react-router/).

Routing is defined in [imports/ui/layouts/App.jsx](https://github.com/ics-software-engineering/meteor-application-template-production/blob/main/app/imports/ui/layouts/App.jsx).


### Authentication

For authentication, the application uses the Meteor accounts package.

When the application is run for the first time, a settings file (such as [config/settings.development.json](https://github.com/ics-software-engineering/meteor-application-template-production/blob/main/config/settings.development.json)) should be passed to Meteor. That will lead to a default account being created through the code in [imports/startup/server/accounts.js](https://github.com/ics-software-engineering/meteor-application-template-production/blob/main/app/imports/startup/server/accounts.js).

The application allows users to register and create new accounts at any time.

### Authorization

Only logged in users can manipulate Stuff documents (but any registered user can manipulate any Stuff document, even if they weren't the user that created it.)

### Configuration

The [config](https://github.com/ics-software-engineering/meteor-application-template-production/tree/main/config) directory is intended to hold settings files.  The repository contains one file: [config/settings.development.json](https://github.com/ics-software-engineering/meteor-application-template-production/blob/main/config/settings.development.json).

The [.gitignore](https://github.com/ics-software-engineering/meteor-application-template-production/blob/main/.gitignore) file prevents a file named settings.production.json from being committed to the repository. So, if you are deploying the application, you can put settings in a file named settings.production.json and it will not be committed.

### Quality Assurance

#### ESLint

The application includes a [.eslintrc](https://github.com/ics-software-engineering/meteor-application-template-production/blob/main/app/.eslintrc) file to define the coding style adhered to in this application. You can invoke ESLint from the command line as follows:

```
[~/meteor-application-template-production/app]-> meteor npm run lint

> meteor-application-template-react@ lint /Users/philipjohnson/meteor-application-template-production/app
> eslint --quiet ./imports
```

ESLint should run without generating any errors.

It's significantly easier to do development with ESLint integrated directly into your IDE (such as IntelliJ).

#### Unit tests

Each collection has unit test. We test:
 * defining and removing documents,
 * checking if we can define duplicates,
 * updating existing documents,
 * and optionally dumping and restoring documents.

```shell
⋊> meteor npm run test-unit

> meteor-application-template-production@ test-unit /Users/carletonmoore/GitHub/ICS314/meteor-application-template-production/app
> cross-env TEST_BROWSER_DRIVER=puppeteer MOCHA_TIMEOUT=150000 meteor test --exclude-archs web.browser.legacy,web.cordova --no-release-check --once --driver-package meteortesting:mocha --port 3100

[[[[[ Tests ]]]]]                             

=> Started proxy.                             
=> Started HMR server.                        
=> Started MongoDB.                           
I20220517-12:45:06.905(-10)?                  
I20220517-12:45:06.916(-10)? --------------------------------
I20220517-12:45:06.916(-10)? ----- RUNNING SERVER TESTS -----
I20220517-12:45:06.916(-10)? --------------------------------
I20220517-12:45:06.916(-10)? 
I20220517-12:45:06.916(-10)? 
I20220517-12:45:06.916(-10)? 
I20220517-12:45:06.916(-10)?   StuffCollection
I20220517-12:45:06.928(-10)? Monti APM: completed instrumenting the app
=> Started your app.

=> App running at: http://localhost:3100/
I20220517-12:45:07.340(-10)?     ✓ Can define and removeIt (422ms)
I20220517-12:45:07.342(-10)?     ✓ Can define duplicates
I20220517-12:45:07.444(-10)?     ✓ Can update (102ms)
I20220517-12:45:07.449(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20220517-12:45:07.450(-10)? 
I20220517-12:45:07.450(-10)?   AdminProfileCollection
I20220517-12:45:07.533(-10)? Defining ADMIN Rita.Renner92@hotmail.com with password changeme
  [SNIP...]
I20220517-12:45:14.038(-10)? Defining ADMIN Vernie5@hotmail.com with password changeme
I20220517-12:45:14.101(-10)?     ✓ Can define and removeIt (6650ms)
I20220517-12:45:14.103(-10)? Defining ADMIN Julianne55@gmail.com with password changeme
I20220517-12:45:14.163(-10)?     ✓ Cannot define duplicates (62ms)
I20220517-12:45:14.165(-10)? Defining ADMIN Simeon_Nitzsche@gmail.com with password dbKW15M7i9rjSLp
I20220517-12:45:14.316(-10)?     ✓ Can update (153ms)
I20220517-12:45:14.317(-10)? 
I20220517-12:45:14.317(-10)?   UserProfileCollection
I20220517-12:45:14.319(-10)? Defining USER Hillard61@gmail.com with password changeme
  [SNIP...]
I20220517-12:45:20.820(-10)? Defining USER Dale_Bergnaum@gmail.com with password changeme
I20220517-12:45:20.883(-10)?     ✓ Can define and removeIt (6565ms)
I20220517-12:45:20.884(-10)? Defining USER Maverick55@gmail.com with password changeme
I20220517-12:45:20.944(-10)?     ✓ Cannot define duplicates (61ms)
I20220517-12:45:20.945(-10)? Defining USER Lucie_Schaden52@gmail.com with password 0kdlEpG4whcVAR3
I20220517-12:45:21.097(-10)?     ✓ Can update (153ms)
I20220517-12:45:21.098(-10)? 
I20220517-12:45:21.098(-10)? 
I20220517-12:45:21.098(-10)?   10 passing (14s)
I20220517-12:45:21.098(-10)? 
I20220517-12:45:21.098(-10)? 
I20220517-12:45:21.098(-10)? --------------------------------
I20220517-12:45:21.098(-10)? ----- RUNNING CLIENT TESTS -----
I20220517-12:45:21.098(-10)? --------------------------------
I20220517-12:45:34.849(-10)? HeadlessChrome/101.0.4950.0
I20220517-12:45:36.981(-10)? HMR: connected
I20220517-12:45:36.985(-10)?   0 passing (0ms)
I20220517-12:45:37.011(-10)? All tests finished!
I20220517-12:45:37.012(-10)? 
I20220517-12:45:37.012(-10)? --------------------------------
I20220517-12:45:37.012(-10)? SERVER FAILURES: 0
I20220517-12:45:37.012(-10)? CLIENT FAILURES: 0
I20220517-12:45:37.012(-10)? --------------------------------
⋊>        
```
#### Integration Tests

The integration tests test the Meteor methods used to update the collections from the client.

```shell
⋊> meteor npm run test-integration 

> meteor-application-template-production@ test-integration /Users/carletonmoore/GitHub/ICS314/meteor-application-template-production/app
> cross-env METEOR_NO_RELEASE_CHECK=1 TEST_BROWSER_DRIVER=puppeteer meteor test --full-app --once --driver-package meteortesting:mocha --port 3100

[[[[[ Tests ]]]]]                             

=> Started proxy.                             
=> Started HMR server.                        
=> Started MongoDB.                           
I20220517-12:52:37.869(-10)? Cannot initialize the database!  Please invoke meteor with a settings file.
I20220517-12:52:38.015(-10)? 
I20220517-12:52:38.016(-10)? --------------------------------
I20220517-12:52:38.016(-10)? --- RUNNING APP SERVER TESTS ---
I20220517-12:52:38.016(-10)? --------------------------------
I20220517-12:52:38.016(-10)? 
I20220517-12:52:38.017(-10)? 
I20220517-12:52:38.017(-10)? 
I20220517-12:52:38.017(-10)?   0 passing (0ms)
I20220517-12:52:38.017(-10)? 
I20220517-12:52:38.018(-10)? 
I20220517-12:52:38.018(-10)? --------------------------------
I20220517-12:52:38.018(-10)? --- RUNNING APP CLIENT TESTS ---
I20220517-12:52:38.018(-10)? --------------------------------
I20220517-12:52:38.123(-10)? Monti APM: completed instrumenting the app
=> Started your app.

=> App running at: http://localhost:3100/
I20220517-12:52:38.453(-10)? HeadlessChrome/101.0.4950.0
I20220517-12:52:39.905(-10)? HMR: connected
I20220517-12:52:39.982(-10)? 
I20220517-12:52:39.982(-10)?   StuffCollection Meteor Methods
I20220517-12:52:40.528(-10)?     ✓ Can define, update, and removeIt (545ms)
I20220517-12:52:40.530(-10)?   AdminProfileCollection Meteor Methods
I20220517-12:52:41.014(-10)? Defining ADMIN Melyna9@hotmail.com with password changeme
I20220517-12:52:41.127(-10)?     ✓ Can define, update, and removeIt (596ms)
I20220517-12:52:41.128(-10)?   UserProfileCollection Meteor Methods
I20220517-12:52:41.518(-10)? Defining USER Monserrate_Lehner@gmail.com with password changeme
I20220517-12:52:41.684(-10)?     ✓ Can define, update, and removeIt (555ms)
I20220517-12:52:41.685(-10)?   3 passing (2s)
I20220517-12:52:41.723(-10)? All tests finished!
I20220517-12:52:41.723(-10)? 
I20220517-12:52:41.723(-10)? --------------------------------
I20220517-12:52:41.724(-10)? APP SERVER FAILURES: 0
I20220517-12:52:41.724(-10)? APP CLIENT FAILURES: 0
I20220517-12:52:41.724(-10)? --------------------------------
⋊>     
```

#### Acceptance Tests

We use [testcafe](https://testcafe.io/) for end-to-end testing.

```shell
⋊> meteor npm run test-acceptance-ci

> meteor-application-template-production@ test-acceptance-ci /Users/carletonmoore/GitHub/ICS314/meteor-application-template-production/app
> testcafe chrome:headless tests/*.testcafe.js -q --app "meteor npm run start"

 Running tests in:
 - Chrome 101.0.4951.64 / macOS 10.15.7

 meteor-application-template-production localhost test with default db
Waiting 15 seconds before running LandingPage.isDisplayed().
Waiting 15 seconds before running LandingPage.isDisplayed().
Waiting 15 seconds before running LandingPage.isDisplayed().
Waiting 15 seconds before running LandingPage.isDisplayed().
 ✓ Test that landing page shows up (unstable)
 ✓ Test that signin and signout work
 ✓ Test that user pages show up
 ✓ Test that sign up and sign out work
 ✓ Test that admin pages show up


 5 passed (1m 20s)
⋊>
```
All of these quality assurance tests are run using GitHub Actions each time code is committed to `main`.

## Screencasts

For more information about this system, please watch one or more of the following screencasts. Note that the current source code might differ slightly from the code in these screencasts, but the changes should be very minor.

  * Walkthrough of system user interface (5 min)
  * Data and accounts structure and initialization (15 min)
  * Navigation, routing, pages, components (23 min)
  * Forms (25 min)
  * Authorization, authentication, and roles (10 min)
