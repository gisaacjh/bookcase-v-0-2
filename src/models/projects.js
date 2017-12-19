const { Model } = require("objection");

class Projects extends Model{
  static get tableName() {
    return 'projects';
  }
  static get relationMappings() {
    const Project_documents = require('./project_documents.js');

    return {
      project_documents: {
        relation: Model.HasManyRelation,
        modelClass: Project_documents,
        join: {
          from: 'projects.id',
          to: 'project_documentsTable.id_projects'
        }
      }
    }
  }

};

module.exports = Projects;
