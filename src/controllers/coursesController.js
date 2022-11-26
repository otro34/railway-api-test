import CourseRepository from '../repository/courseRepository.js'

const create = async (req,res) => {
    
    const result = await CourseRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const courses = await CourseRepository.findAll();

    return sendResponse(courses,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const course = await CourseRepository.findOne(id);

    return sendResponse(course,res);
}

const update = async(req,res) => {
    const course = await CourseRepository.update(req.body);

    return sendResponse(course,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const course = await CourseRepository.remove(id);

    return sendResponse(course,res);
}

const sendResponse = (result,res) => {
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const CoursesController = { create, findAll, findOne, update, remove }

export default CoursesController