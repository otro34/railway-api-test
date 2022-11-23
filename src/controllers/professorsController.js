import ProfessorRepository from '../repository/professorRepository.js'

const create = async (req,res) => {
    
    const result = await ProfessorRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const professors = await ProfessorRepository.findAll();

    return sendResponse(professors,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const professor = await ProfessorRepository.findOne(id);

    return sendResponse(professor,res);
}

const update = async(req,res) => {
    const professor = await ProfessorRepository.update(req.body);

    return sendResponse(professor,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const professor = await ProfessorRepository.remove(id);

    return sendResponse(professor,res);
}

const sendResponse = (result,res) => {
    
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const ProfessorController = { create, findAll, findOne, update, remove }

export default ProfessorController