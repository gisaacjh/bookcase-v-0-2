
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('project_documentsTable', function(table) {
      table.integer('id_projects')
      .unsigned()
      .references('id')
      .inTable('projects');
      return table;
    });

};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('project_documentsTable', table => {
      table.dropForeign('id_projects');
      table.dropColumn('id_projects');
      return table;
    });
};
