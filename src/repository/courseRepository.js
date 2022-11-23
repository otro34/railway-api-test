
import Course from '../models/course.js'

const create = async (course) => {

    try {
        const newCourse = await Course.create(course);
            
        return newCourse;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await Course.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Course.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(course) => {
    try {
        const foundcourse = await Course.findOne({
            where: {
                id: course.id
            }
        })

        foundcourse.set(course);

        await foundcourse.save();

        return foundcourse;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Course.destroy({
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

const CoursesRepository = { create, findAll, findOne, update, remove }

export default CoursesRepository