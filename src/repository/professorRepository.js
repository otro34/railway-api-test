
import Professor from '../models/professor.js'

const create = async (professor) => {

    try {
        const newProfessor = await Professor.create(professor);
            
        return newProfessor;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await Professor.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Professor.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(professor) => {
    try {
        const foundprofessor = await Professor.findOne({
            where: {
                id: professor.id
            }
        })

        foundprofessor.set(professor);

        await foundprofessor.save();

        return foundprofessor;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Professor.destroy({
            where: {
                id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const ProfessorRepository = { create, findAll, findOne, update, remove }

export default ProfessorRepository