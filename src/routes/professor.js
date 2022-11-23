import express from 'express'
import ProfessorController from '../controllers/professorsController.js'

const { create, findOne, findAll, remove, update } = ProfessorController

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/",update);
router.delete("/:id",remove);
router.get("/:id",findOne);

export default router;