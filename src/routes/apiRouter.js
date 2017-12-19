const Router = require('express').Router;
//Iniciar el Router
const apiRouter = Router();

//Modelos

const Project_Documents = require("../models/project_documents.js");
const Documents = require("../models/documents.js");
const Projects = require("../models/projects.js");
const ProjectId_Documents = require("../models/projectId_documents.js");
const User = require("../models/user.js");
const User_Projects = require("../models/user_projects.js");

//Mis rutas que responden JSON
function getAllDocuments (req, res) {
  Documents.query().eager("project_documents").then(data => res.json(data));
}

function getAllProjects (req, res) {
  Projects.query().eager("project_documents").then(data => res.json(data));
}

function getAllUsers (req, res) {
  User.query().eager("user_projects").then(data => res.json(data));
}

apiRouter
  .get('/documents', getAllDocuments);

apiRouter
  .get('/projects', getAllProjects);

apiRouter
  .get('/users', getAllUsers);
//   .get ('/', (req, res) => {
//     res.json({
//       'routes': {
//         '/api/users': 'Show the users',
//         '/api/files': 'Show the files',
//         '/api/projects': 'Show the projects'
//       }
//     });
//   });

// apiRouter
//   .get('/files', (req, res) => {
//     res.json([{
//       "title": "Principios de la Iconología",
//       "author_last_name": "Panofsky",
//       "author_first_name": "Erwin",
//       "year_published": 1947,
//       "publisher": "Porrua",
//       "category": "Art",
//       "subject_matter": "Iconología",
//       "pages": 217,
//       "format": ".pdf"
//     }
//   ]);
//   });



module.exports = apiRouter;
