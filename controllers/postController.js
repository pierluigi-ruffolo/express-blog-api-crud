import arrayPosts from "../data/arrayPosts.js";

/* INDEX */
function index(req, res) {
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
}

/* SHOW */
function show(req, res) {
  const id = parseInt(req.params.id);
  let post = arrayPosts.find((post) => id === post.id);
  if (!post) {
    res.status(404);
    post = {
      error: "Not Found",
      messagge: "Post non trovato",
    };
  }

  res.json(post);
}

/* STORE */
function store(req, res) {
  res.send("Aggiungere un post");
}

/* UPDATE */
function update(req, res) {
  const id = req.params.id;
  res.send("cambiare l'intero post " + " " + id);
}
/* MODIFY */
function modify(req, res) {
  const id = req.params.id;
  res.send("cambiare parzialmente post con id" + " " + id);
}

/* DESTROY */
function destroy(req, res) {
  const id = req.params.id;
  res.send("Eliminare post " + " " + id);
}

const controller = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
export default controller;
