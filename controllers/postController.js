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
  const id = parseInt(req.params.id);
  let post = arrayPosts.find((post) => id === post.id);
  if (!post) {
    res.status(404);
    post = {
      error: "Not Found",
      message: "Post non trovato",
    };
  }

  res.json(post);
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
  const id = parseInt(req.params.id);
  const dati = req.body;
  const find = arrayPosts.find((post) => post.id === id);
  if (find === undefined) {
    res.status(404);
    return res.json({
      error: "NOT FOUND",
      message: "Post non trovato",
    });
  }
  if (dati.titolo === undefined || dati.titolo.length === 0) {
    res.status(400);
    return res.json({
      error: "Il titolo è necessario",
    });
  }
  find.titolo = dati.titolo;
  find.contenuto = dati.contenuto;
  find.tags = dati.tags;

  res.status(200);
  res.json(find);
}

/* MODIFY */
function modify(req, res) {
  const id = req.params.id;
  res.send("cambiare parzialmente post con id" + " " + id);
}

/* DESTROY */
function destroy(req, res) {
  const id = parseInt(req.params.id);
  const index = arrayPosts.findIndex((post) => post.id === id);
  if (index === -1) {
    res.status(404);
    res.json({
      error: "not found",
      message: "Post non trovato",
    });
  } else {
    arrayPosts.splice(index, 1);
    res.sendStatus(204);
  }
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
