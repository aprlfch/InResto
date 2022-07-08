/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavRestoIdb from '../../src/scripts/data/resto-idb';

const createLikeButtonInitiatorWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favRestoIdb: FavRestoIdb,
    data: {
      restaurant,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export {
  // eslint-disable-next-line import/prefer-default-export
  createLikeButtonInitiatorWithResto
};