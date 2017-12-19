const { Model } = require("objection");

class Project_Documents extends Model {
  static get tableName() {
    return 'project_documentsTable';
  }
  static get relationMappings() {
    const documents = require('./documents.js');

    return {
      documents: {
        relation: Model.BelongsToOneRelation,
        modelClass: documents,
        join: {
          from: 'project_documentsTable.id_documents',
          to: 'documents.id'
        }
      }
    };
  }
};

module.exports = Project_Documents;
