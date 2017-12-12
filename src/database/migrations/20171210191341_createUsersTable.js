
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('users', table => {
      table.increments();
      table.string('username');
      table.string('firstname');
      table.string('lastname');
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.integer('age');
      table.string('institute');
      table.string('occupation');
   });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('users');
};
