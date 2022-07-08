/* eslint-disable no-underscore-dangle */
import FavRestoIdb from '../data/resto-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/like-button';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer,
    data,
  }) {
    // eslint-disable-next-line no-underscore-dangle
    this._likeButtonContainer = likeButtonContainer;
    // eslint-disable-next-line no-underscore-dangle
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const {
        id,
      } = this._restaurant;

      // get resto in indexed db
      const restaurant = await FavRestoIdb.getResto(id);

      if (restaurant) {
        this._renderLikedButtonTemplate();
      } else {
        this._renderLikeButtonTemplate();
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);

      throw new Error(err);
    }
  },

  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      // onClick fav the selected resto
      await FavRestoIdb.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      // onClick unfav the selected resto
      await FavRestoIdb.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;