
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('project_documentsTable', table => {
      table.increments();
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('project_documentsTable');
};
