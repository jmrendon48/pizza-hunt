const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId>
// add comment route
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
// add reply route
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// delete reply route
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
