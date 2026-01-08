import express from "express";
import routerPosts from "./routers/posts.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use("/posts", routerPosts);

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log("Server avviato sulla porta" + " " + port);
});
