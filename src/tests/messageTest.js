const { test } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const MessagePage = require('../pages/messagePage');

test('Send a message on Instagram', async ({ page }) => {
    const homePage = new HomePage(page);
    const messagePage = new MessagePage(page);

    await homePage.searchForUser('enter_username');
    await messagePage.sendMessage('Hi, how are you?');
});
