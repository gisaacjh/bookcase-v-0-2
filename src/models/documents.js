const { Model } = require("objection");

class Documents extends Model {
  static get tableName() {
    return 'documents';
  }
  static get relationMappings() {
      const project_documents = require('./project_documents.js');

      return {
        project_documents: {
          relation: Model.BelongsToOneRelation,
          modelClass: project_documents,
          join: {
            from: 'documents.id',
            to: 'project_documentsTable.id_documents'
          }
        }
      }
  }
};

module.exports = Documents;
