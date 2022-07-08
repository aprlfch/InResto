/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Resto');

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({
  I
}) => {
  I.amOnPage('/#/favorite');
});

Scenario('Empty favorite Resto', ({
  I
}) => {
  I.dontSeeElement('.card');
});

Scenario('liking one restaurant', async ({
  I
}) => {
  // URL: /
  I.amOnPage('/');
  I.waitForElement('.card');
  I.seeElement('.card-a-tag');
  const firstRestoCard = locate('.card').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  // URL: /resto/:id
  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.card-a-tag');
  const likedCardTitle = await I.grabTextFrom('.card');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle); // membandingkan
});