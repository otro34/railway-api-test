import app from './app.js'
import sequelize from './src/config/database.js'

async function main() {
    try {
        const init = process.argv[2]

        if (init)
            await sequelize.sync({force: true});
        else
            await sequelize.sync({force: false});
        
        console.log('Connection successful')
        
        var PORT = process.env.PORT || 3001;

        app.listen(PORT);

        console.log('App Iniciada en puerto '+PORT)

    } catch (error) {
        console.error('Connection error', error)
    }
}

main()