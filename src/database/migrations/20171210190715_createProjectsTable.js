
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('projects', table => {
      table.increments();
      table.string('title');
      table.text('notes');
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('projects')
};
