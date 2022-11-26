import express from 'express'
import CoursesController from '../controllers/coursesController.js'

const { create, findOne, findAll, remove, update, findAllWithProfessor } = CoursesController

const router = express.Router();

router.get("/", findAll);
router.get("/all", findAllWithProfessor)
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;