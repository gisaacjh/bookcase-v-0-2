exports.up = function(knex, Promise) {
    return knex
      .schema
      .createTable('user_projects', table => {
        table.increments();
  });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('user_projects');
};
