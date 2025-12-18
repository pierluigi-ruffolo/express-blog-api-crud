import express from "express";
import arrayPosts from "../data/arrayPosts.js";
const router = express.Router();

/* INDEX (tutti i post)*/
router.get("/", (req, res) => {
  const query = req.query.tags;
  let response = "";
  if (query) {
    const filterPosts = arrayPosts.filter((post) => post.tags.includes(query));
    response = {
      postsLength: filterPosts.length,
      posts: filterPosts,
    };
  } else {
    response = {
      postsLength: arrayPosts.length,
      posts: arrayPosts,
    };
  }

  res.json(response);
});

/* SHOW (singolo post)*/
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = arrayPosts.find((post) => id === post.id);
  res.json(post);
});

/* STORE (aggiungere un post)*/
router.post("/", (req, res) => {
  res.send("Aggiungere un post");
});

/* UPDATE (cambiare l'intero post) */
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send("cambiare l'intero post " + " " + id);
});

/* MODIFY (cambiare solo qualcosa del post) */
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.send("cambiare qualcosa del post " + " " + id);
});

/* DESTROY (cancella post ) */
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send("eliminare post" + " " + id);
});

export default router;
