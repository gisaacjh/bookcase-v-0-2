const { Model } = require("objection");

class ProjectId_Documents extends Model {
  static get tableName() {
    return 'project_documentsTable';
  }
  static get relationMappings() {
    const projects = require('./projects.js');

    return {
      projects: {
        relation: Model.BelongsToOneRelation,
        modelClass: projects,
        join: {
          from: 'project_documentsTable.id_projects',
          to: 'projects.id'
        }
      }
    };
  }
};

module.exports = ProjectId_Documents;
