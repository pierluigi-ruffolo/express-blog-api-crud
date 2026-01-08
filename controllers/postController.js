import arrayPosts from "../data/arrayPosts.js";

/* INDEX */
function index(req, res) {
  const queryTags = req.query.tags;
  const queryCategory = req.query.categoria;
  let response = arrayPosts;
  if (queryTags) {
    response = arrayPosts.filter((post) => post.tags.includes(queryTags));
  }
  if (queryCategory) {
    response = response.filter((post) => post.categoria === queryCategory);
  }

  res.json({
    lengthPosts: response.length,
    response: response,
  });
}

/* SHOW */
function show(req, res) {
  res.json(req.post);
}

/* STORE */
function store(req, res) {
  const dati = req.body;
  if (dati.titolo === undefined || dati.titolo.length === 0) {
    res.status(400);
    return res.json({
      error: "Il titolo è necessario",
    });
  }
  const newId = arrayPosts[arrayPosts.length - 1].id + 1;
  const newPost = {
    id: newId,
    titolo: dati.titolo,
    contenuto: dati.contenuto,
    tags: dati.tags,
  };
  arrayPosts.push(newPost);
  res.status(201);
  res.json(newPost);
}

/* UPDATE */
function update(req, res) {
  const dati = req.body;
  const post = req.post;

  if (dati.titolo === undefined || dati.titolo.length === 0) {
    res.status(400);
    return res.json({
      error: "Il titolo è necessario",
    });
  }
  post.titolo = dati.titolo;
  post.contenuto = dati.contenuto;
  post.tags = dati.tags;

  res.status(200);
  res.json(post);
}

/* MODIFY */
function modify(req, res) {
  const id = req.params.id;
  res.send("cambiare parzialmente post con id" + " " + id);
}

/* DESTROY */
function destroy(req, res) {
  const index = req.index;
  arrayPosts.splice(index, 1);
  res.sendStatus(204);
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
