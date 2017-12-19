const { Model } = require("objection");

class User_Projects extends Model {
  static get tableName() {
    return 'user_projects';
  }
  static get relationMappings() {
    const users = require('./user.js');

    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: users,
        join: {
          from: 'user_projects.id_users',
          to: 'users.id'
        }
      }
    };
  }
};

module.exports = User_Projects;
