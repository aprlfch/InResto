/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Before(({
    I
}) => {
    I.amOnPage('/#/favorite');
});

Scenario('Empty favorite Resto', ({
    I
}) => {
    I.dontSeeElement('.card-a-tag');
});

Scenario('unliking one restaurant', async ({
    I
}) => {
    I.dontSeeElement('.card-a-tag');
    I.amOnPage('/');
    I.waitForElement('.card');
    I.seeElement('.card-a-tag');

    const firstRestoCard = locate('.card').first();
    const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
    I.click(firstRestoCard);

    I.waitForElement('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.waitForElement('.card');
    I.seeElement('.card-a-tag');
    const unlikedCardTitle = await I.grabTextFrom('.card');

    assert.strictEqual(firstRestoCardTitle, unlikedCardTitle);

    I.seeElement('.card-a-tag');
    await I.grabTextFrom(firstRestoCard);
    I.click(firstRestoCard);

    I.waitForElement('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.dontSeeElement('.card-a-tag');
});