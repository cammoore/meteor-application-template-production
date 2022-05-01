import { Selector, t } from 'testcafe';
import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const adminCredentials = { username: 'admin@foo.com', password: 'changeme' };
const newCredentials = { username: 'jane@foo.com', password: 'changeme' };

fixture('mrbp localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async () => {
  await landingPage.isDisplayed();
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that user pages show up', async () => {
  await navBar.gotoSigninPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.gotoAddStuffPage();
  await addStuffPage.isDisplayed();
  await navBar.gotoListStuffPage();
  await listStuffPage.isDisplayed();
  // want to see if we can get to the editStuffPage
  const editLinks = await Selector(`.${COMPONENT_IDS.LIST_STUFF_EDIT}`);
  await t.click(editLinks.nth(0));
  await editStuffPage.isDisplayed();
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that admin pages show up', async () => {
  await navBar.gotoSigninPage();
  await signInPage.signin(adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(adminCredentials.username);
  await navBar.gotoAddStuffPage();
  await addStuffPage.isDisplayed();
  await navBar.gotoListStuffPage();
  await listStuffPage.isDisplayed();
  // want to see if we can get to the editStuffPage
  const editLinks = await Selector(`.${COMPONENT_IDS.LIST_STUFF_EDIT}`);
  await t.click(editLinks.nth(0));
  await editStuffPage.isDisplayed();
  await navBar.gotoListStuffAdminPage();
  await listStuffAdminPage.isDisplayed();
  await navBar.gotoManageDatabasePage();
  await manageDatabasePage.isDisplayed();
});

