import express from "express";
import controllerPost from "../controllers/postController.js";
import checkPostExists from "../middlewares/checkPostExists.js";
const router = express.Router();

/* INDEX (tutti i post)*/
router.get("/", controllerPost.index);

/* SHOW (singolo post)*/
router.get("/:id", checkPostExists, controllerPost.show);

/* STORE (aggiungere un post)*/
router.post("/", controllerPost.store);

/* UPDATE (cambiare l'intero post) */
router.put("/:id", checkPostExists, controllerPost.update);

/* MODIFY (cambiare solo qualcosa del post) */
router.patch("/:id", controllerPost.modify);

/* DESTROY (cancella post ) */
router.delete("/:id", checkPostExists, controllerPost.destroy);

export default router;
