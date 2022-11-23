import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Professor from './professor.js'

const Course = sequelize.define('courses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    level: {
        type: DataTypes.INTEGER
    },
    idProfessor: {
        type: DataTypes.INTEGER
    }
})

Professor.hasMany(Course,{
    foreignKey: 'idProfessor',
    sourceKey: 'id'
})

Course.belongsTo(Professor,{
    foreignKey: 'projectId',
    targetId: 'id'
})

export default Course;