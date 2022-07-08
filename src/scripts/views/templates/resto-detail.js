/* eslint-disable indent */
import CONFIG from '../../globals/config';

const restoDetail = (resto) => `
<div class="detail">
    <div>
      <div>
        <img class="img-container2" alt=" ${resto.name}" src="${
  CONFIG.BASE_IMAGE_URL_SM + resto.pictureId
}" crossorigin="anonymous"/>
      </div>
    </div>
    <ul class="detail-info">
      <li><span><i title="restaurant" class="fa fa-store"></i>&emsp;${resto.name}</span></li>
      <li><span><i title="address" class="fa fa-map-marker-alt"></i>&emsp;${resto.address}, ${
        resto.city
}</span></li>
      <li><span><i title="ratings" class="fa fa-star"></i>&emsp;${resto.rating}</span></li>
      <li><p class="description2">Description: ${resto.description}</p></li>
      <li>${resto.categories
        .map(
          (category) => `
            <span class="category">${category.name}</span>
          `,
        )
        .join('')}
      </li>
    </ul>
    <h3>Menu</h3>
    <div class="detail-menu grid-2">
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${resto.menus.foods
            .map(
              (food) => `
                <li>${food.name}</li>
              `,
            )
            .join('')}
        </ul>
      </div>
      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${resto.menus.drinks
            .map(
              (drink) => `
                <li>${drink.name}</li>
              `,
            )
            .join('')}
        </ul>
      </div>
    </div>
    <h3 class="title-review">Reviews</h3>

    <div class="detail-review">
    ${resto.customerReviews
      .map(
        (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name">${review.name}</p>

              <p class="review-date">${review.date}</p>
            </div>

            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
      )
      .join('')}
    </div>
  </div>
`;

export default restoDetail;