
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('documents', table => {
      table.increments();

      table.string('Title');
      table.string('authorLastname');
      table.string('authorFirstname');
      table.integer('yearPublisehd');
      table.string('publisher');
      table.string('ISBN');

    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('documents');
};
