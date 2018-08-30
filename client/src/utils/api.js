// THE RECIPE API CALLS
// import axios from 'axios';

export default {
  searchByQuery: function(query) {
    return fetch(`https://tranquil-garden-99928.herokuapp.com/https://food2fork.com/api/search?key=7743a1c8012c773852737a26cf2f7c3f&q=${query}&sort=r`)
      .then(res => res.json())
  }
};