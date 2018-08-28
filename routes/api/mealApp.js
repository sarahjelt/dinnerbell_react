const router = require('express').Router();
const mealController = require('../../controllers/mealController');

router
  .route('/user')
  .get(mealController.findAllUsers)
  .post(mealController.createUser);

router
  .route('/user/:id')
  .get(mealController.findUserById)
  // .put(mealController.addFriendToUser)
  .delete(mealController.removeUser);

router
    .route('/user/name/:name')
    .get(mealController.findUserByName)

router
    .route('/user/email/:email')
    .get(mealController.findUserByEmail)

router
    .route('/user/shelf/:id')
    .get(mealController.getUserProfile)
    .put(mealController.addMealToProfile)

router
  .route('/meal')
  .get(mealController.findAllMeals)
  .post(mealController.createMeal);

router
  .route('/meal/:id')
  .get(mealController.findMealById)
  .put(mealController.updateMeal)
  .delete(mealController.removeMeal);

module.exports = router;