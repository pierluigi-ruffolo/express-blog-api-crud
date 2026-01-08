import arrayPosts from "../data/arrayPosts.js";

export default function checkPostExists(req, res, next) {
  const id = parseInt(req.params.id);
  const post = arrayPosts.find((post) => id === post.id);
  const indexPost = arrayPosts.findIndex((postIndex) => id === postIndex.id);
  if (post === undefined && indexPost === -1) {
    res.status(404);
    res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
    return;
  }
  req.post = post;
  req.index = indexPost;
  next();
}
