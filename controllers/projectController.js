const projectModel = require('../models/proyectModel');

function getAllProjects(req, res) {
    const projects = projectModel.getAllProjects();
    if (projects.length > 0) 
            res.status(200).json(projects);
    else 
        res.status(404).json({ code: 404, message: "Projects not found" });
}

function createProject(req, res) {
    //validaciones de estructura

    const newProject = projectModel.createProject(req.body);
    res.status(201).json(newProject);
}
module.exports = {
    getAllProjects,
    createProject
}