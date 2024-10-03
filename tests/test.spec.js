// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
})

test('TC01',async ({ page }) => {

//await page.setViewportSize({ width: 375, height: 667 });
//await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.getByLabel('Username').fill('student');
await page.getByLabel('Password').fill('Password123');
await page.getByRole('button',{name:'Submit'}).click();

//await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
expect(page.url()).toBe('https://practicetestautomation.com/logged-in-successfully/');
await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();

const logoLink = page.getByRole('link', { name: 'Practice Test Automation', exact: true });
await expect(logoLink).toBeVisible();
const logoImage = logoLink.locator('img');
await expect(logoImage).toBeVisible();
console.log(page.url('https://practicetestautomation.com/logged-in-successfully/'));
//await page.screenshot({ path: "./tests/screenshot.jpg" });
})

test('TC02',async ({ page }) => {

//await page.setViewportSize({ width: 375, height: 667 });
//await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.getByLabel('Username').fill('wrong username');
await page.getByLabel('Password').fill('Password123');
await page.getByRole('button',{name:'Submit'}).click();

const errorMessage = await page.locator('#error').textContent();
expect(errorMessage).toContain('Your username is invalid');

//await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
/*expect(page.url()).toBe('https://practicetestautomation.com/logged-in-successfully/');
await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();

const logoLink = page.getByRole('link', { name: 'Practice Test Automation', exact: true });
await expect(logoLink).toBeVisible();
const logoImage = logoLink.locator('img');
await expect(logoImage).toBeVisible();
console.log(page.url('https://practicetestautomation.com/logged-in-successfully/'));
//await page.screenshot({ path: "./tests/screenshot.jpg" });*/

})

test('TC03',async ({ page }) => {

//await page.setViewportSize({ width: 375, height: 667 });
//await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.getByLabel('Username').fill('student');
await page.getByLabel('Password').fill('wrong password');
await page.getByRole('button',{name:'Submit'}).click();

const errorMessage = await page.locator('#error').textContent();
expect(errorMessage).toContain('Your password is invalid');

//await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
/*expect(page.url()).toBe('https://practicetestautomation.com/logged-in-successfully/');
await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();

const logoLink = page.getByRole('link', { name: 'Practice Test Automation', exact: true });
await expect(logoLink).toBeVisible();
const logoImage = logoLink.locator('img');
await expect(logoImage).toBeVisible();
console.log(page.url('https://practicetestautomation.com/logged-in-successfully/'));
//await page.screenshot({ path: "./tests/screenshot.jpg" });*/

})

test('TC04',async ({ page }) => {

//await page.setViewportSize({ width: 375, height: 667 });
//await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.getByLabel('Username').fill('student');
await page.getByLabel('Password').fill('Password123');
await page.getByRole('button',{name:'Submit'}).click();

await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

await page.getByRole('link', { name: 'Log out' }).click();
await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');


//await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
/*expect(page.url()).toBe('https://practicetestautomation.com/logged-in-successfully/');
await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();

const logoLink = page.getByRole('link', { name: 'Practice Test Automation', exact: true });
await expect(logoLink).toBeVisible();
const logoImage = logoLink.locator('img');
await expect(logoImage).toBeVisible();
console.log(page.url('https://practicetestautomation.com/logged-in-successfully/'));
//await page.screenshot({ path: "./tests/screenshot.jpg" });*/

})

test('TC05',async ({ page }) => {

//await page.setViewportSize({ width: 375, height: 667 });
//await page.goto('https://practicetestautomation.com/practice-test-login/');

await page.getByRole('button',{name:'Submit'}).click();
const errorMessage = await page.locator('#error').textContent();
expect(errorMessage).toContain('Please enter your username and password');

/*await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

await page.getByRole('link', { name: 'Log out' }).click();
await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');*/


//await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
/*expect(page.url()).toBe('https://practicetestautomation.com/logged-in-successfully/');
await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();

const logoLink = page.getByRole('link', { name: 'Practice Test Automation', exact: true });
await expect(logoLink).toBeVisible();
const logoImage = logoLink.locator('img');
await expect(logoImage).toBeVisible();
console.log(page.url('https://practicetestautomation.com/logged-in-successfully/'));
//await page.screenshot({ path: "./tests/screenshot.jpg" });*/

})