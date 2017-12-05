
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('documents_categories', table => {
      table.increments();

    });

};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('documents_categories');
};
