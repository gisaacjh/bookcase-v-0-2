const dataRows = [
  {
    username: 'Barbarito',
    firstname: 'Bárbaro',
    lastname: 'Torres',
    password: 'candela',
    email: 'bartorres@gmail.com',
    age: '54',
    institute: 'UNAM',
    occupation: 'Professor'
  },
  {
    username: 'Brainiac',
    firstname: 'Heriberto',
    lastname: 'Cruz',
    password: 'piso13',
    email: 'heri@gmail.com',
    age: '22',
    institute: 'COLMEX',
    occupation: 'student'
  }
];




exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users')
      .insert(dataRows);
  });
};
