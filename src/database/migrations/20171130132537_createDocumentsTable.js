
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('documents', table => {
      table.increments();

      table.string('Title');
      table.string('authorLastname');
      table.string('authorFirstname');
      table.integer('yearPublished');
      table.string('publisher');
      table.string('isbn');

    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('documents');
};
