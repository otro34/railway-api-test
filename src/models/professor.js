import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js'

const Professor = sequelize.define('professor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    }
})

export default Professor;