const dataRows = [{
  title: 'Principios de la Iconología',
  authorLastname: 'Panofsky',
  authorFirstname: 'Erwin',
  yearPublished: '1947',
  publisher: 'Porrúa',
  isbn: '124876235876'
}];

exports.seed = function(knex, Promise) {
  return knex('documents')
    .del()
    .then(() => {
      return knex('documents')
        .insert(dataRows)
    });
};
