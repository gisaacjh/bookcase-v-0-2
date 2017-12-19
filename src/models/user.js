const { Model } = require("objection");

class User extends Model{
  static get tableName() {
    return 'users';
  }
  static get relationMappings() {
    const User_projects = require('./user_projects.js');

    return {
      user_projects: {
        relation: Model.HasManyRelation,
        modelClass: User_projects,
        join: {
          from: 'users.id',
          to: 'user_projects.id_users'
        }
      }
    }
  }

};

module.exports = User;
