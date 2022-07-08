import RestaurantDbSource from '../../data/resto-source';
import restoCard from '../templates/resto-card';

const Home = {
  async render() {
    return `
      <div class="container">

        <div id="main-container">
          <h1 tabindex="0" class="main-content__title">Explore Restaurant</h1>

          <section id="explore-restaurant"></section>
        </div>
      </div>
    `;
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const mainContainer = document.querySelector('#main-container');
    const listContainer = document.querySelector('#explore-restaurant');

    try {
      const data = await RestaurantDbSource.getRestaurantList(); // fetch restaurant list

      // loop restaurants data
      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += restoCard(restaurant);
      });
    } catch (err) {
      mainContainer.style.display = 'block';
      listContainer.innerHTML = `Error: ${err.message}`;
    }
  },
};

export default Home;
