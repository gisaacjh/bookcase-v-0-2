const dataRows = [
  {
    title: 'Mexican Revolution',
    notes: 'In this book the author prints a different image of the twentieth century event in Mexico that laid the current foundations of the country...',
    id: 1
  },
  {
    title: 'The socialist view in the Muralismo',
    notes: 'An excellent point shows here; why the popular perspective was shown by rich guys of twenties... ',
    id: 2
  },
  {
    title: 'The silent loss of sovereignty',
    notes: 'I found three good reads about the loss of autodetermination',
    id: 3
  }
];



exports.seed = function(knex, Promise) {
  return knex('projects')
    .del()
    .then(() => {
      return knex('projects')
        .insert(dataRows);
    });
};
