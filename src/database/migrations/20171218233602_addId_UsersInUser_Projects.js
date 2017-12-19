
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('user_projects', function(table) {
      table.integer('id_users')
      .unsigned()
      .references('id')
      .inTable('users');
      return table;
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('user_projects', table => {
      table.dropForeign('id_users');
      table.dropColumn('id_users');
      return table;
    });
};
