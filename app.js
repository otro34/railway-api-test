import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'

import coursesRoutes from './src/routes/courses.js'
import professorsRoutes from './src/routes/professor.js'

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/courses", coursesRoutes);
app.use("/professor", professorsRoutes)

export default app