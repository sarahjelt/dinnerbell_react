const router = require('express').Router();
const mealController = require('../../controllers/mealController');

router
  .route('/user')
  .get(mealController.findAllUsers)
  .post(mealController.createUser);

router
  .route('/user/:id')
  .get(mealController.findUserById)
  .put(mealController.addFriendToUser)
  .delete(mealController.removeUser);

router
    .route('/user/friends/:id')
    .get(mealController.getUserFriends)

router
    .route('/user/name/:name')
    .get(mealController.findUserByName)

router
    .route('/user/email/:email')
    .get(mealController.findUserByEmail)

router
    .route('/user/shelf/:id')
    .get(mealController.getUserShelf)
    .put(mealController.addMediaItemToShelf)

router
    .route('/user/lists/:id')
    .get(mealController.getUserLists)
    .put(mealController.pushUserLists);

router
  .route('/media')
  .get(mealController.findAllMedia)
  .post(mealController.createMedia);

router
  .route('/media/validate')
  .post(mealController.findMediaBySynopsis)

router
  .route('/media/:id')
  .get(mealController.findMediaById)
  .put(mealController.updateMedia)
  .delete(mealController.removeMedia);

router
  .route('/review')
  .get(mealController.findAllReviews)
  .post(mealController.createReview);

router
  .route('/review/:id')
  .get(mealController.findReviewById)
  .put(mealController.updateReview)
  .delete(mealController.removeReview);

router
    .route('/review/user/:id')
    .get(mealController.findReviewByUserId)

module.exports = router;