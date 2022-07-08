import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resto-source';
import restoDetail from '../templates/resto-detail';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review';

const Detail = {
  async render() {
    return `
    <div class="container">

    <div class="like" id="likeButtonContainer"></div>

    <div id="main-container">
      <h2 class="title-container">Resto Detail</h2>

      <section id="detail-resto"></section>

      <div class="form-review">
        <form autocomplete="on">
          <div class="mb-3">
            <label for="name-input" class="form-label">Name</label>
            <input type="text" class="form-control" id="name-input" minlength="3" placeholder="Your name..." required>
          </div>

          <div class="mb-3">
            <label for="review-input" class="form-label">Review</label>
            <input type="text" class="form-control" id="review-input" minlength="3" placeholder="Your review..." required>
          </div>

          <button id="submit-review" type="submit" class="submit-btn">Submit Review</button>
        </form>
      </div>
    </div>
  </div>
    `;
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const mainContainer = document.querySelector('#main-container');
    const detailContainer = document.querySelector('#detail-resto');

    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);

      // use the detail data
      detailContainer.innerHTML += restoDetail(data.restaurant);

      // init like button
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        data,
      });

      // review form
      const btnSubmitReview = document.querySelector('#submit-review');
      const nameInput = document.querySelector('#name-input');
      const reviewInput = document.querySelector('#review-input');

      btnSubmitReview.addEventListener('click', async (e) => {
        e.preventDefault();

        // POST review
        await PostReview(url, nameInput.value, reviewInput.value);

        // clear form input
        nameInput.value = '';
        reviewInput.value = '';
      });
    } catch (err) {
      mainContainer.style.display = 'block';
      detailContainer.innerHTML = `Error: ${err.message}`;
    }
  },
};

export default Detail;
