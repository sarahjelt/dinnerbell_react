import axios from 'axios';

export default {
  searchByQuery: function(query) {
    return fetch(`https://tranquil-garden-99928.herokuapp.com/https://food2fork.com/api/search?key=7743a1c8012c773852737a26cf2f7c3f&q=${query}&sort=r`)
      .then(res => res.json())
  },
  createNewUser: function(userData) {
    return axios.post('/api/authenticate/signup', userData)
  },
  authenticateUser: function(userData) {
    return axios.post('/api/authenticate/signin', userData)
  },
  addMealToDB: function(mealItem) {
    //console.log('this is the', JSON.stringify(mealItem))
    return axios.post('/api/mealApp/meal', mealItem)
  },
  getMealIdIfExists: function(mealItem) {
    //console.log('mealItem, finding the id', mealItem);
    return axios.post('/api/mealApp/meal/validate', mealItem)
  },
  getSavedMeals: function(id) {
    return axios.get(`/api/mealApp/user/profile/${id}`)
  },
  addMealToUserSaved: function(userId, mealItemId) {
    return axios.put(`/api/mealApp/user/saved/${userId}`, {mealItemId: mealItemId})
  }
};