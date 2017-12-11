
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('documents', table => {
      table.increments();
      table.string('title');
      table.string('author');
      table.string('year');
      table.string('publisher');
      table.string('isbn');
      table.string('category');
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('documents')
};
