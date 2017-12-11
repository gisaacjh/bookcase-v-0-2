const dataRows = [
  {
    title: 'Principios de la Iconología',
    author: 'Panofsky, Erwin',
    year: '1949',
    publisher: 'Porrúa',
    isbn: '1359628271239',
    category: 'Art'
  },
  {
    title: 'La Filosofía náhuatl: estudiada en sus fuentes',
    author: 'León-Portilla, Miguel',
    year: '1972',
    publisher: 'UNAM',
    isbn: '4201367550089',
    category: 'Philosophy'
  },
  {
    title: 'Paradigmas para una metaforología del cosmos: Hans Blumenberg y las metáforas contemporáneas del universo',
    author: 'Fragio, Alberto',
    year: '1987',
    publisher: 'Chubasco',
    isbn: '6577131893996',
    category: 'Philosophy'
  },
  {
    title: 'Comunicación musical y cultura popular: una introducción crítica',
    author: 'Méndez Rubio, Antonio',
    year: '1992',
    publisher: 'CONACULTA',
    isbn: '9787734623390',
    category: 'Art'
  },
  {
    title: 'The art of sketching: 400 years of travel diaries',
    author: 'Argod, Pascale',
    year: '2001',
    publisher: 'SigloXXI',
    isbn: '5223700139735',
    category: 'Art'
  },
  {
    title: 'Redistribución y cultura participante: el caso de los trabajadores de cuello blanco en Montevideo (1943-1952)',
    author: 'Bello Chávez, Guillermo',
    year: '2017',
    publisher: 'CONACULTA',
    isbn: '2340007426886',
    category: 'history'
  },
  {
    title: 'Las relaciones internacionales en el siglo XXI',
    author: 'Astié-Burgos, Walter',
    year: '2017',
    publisher: 'Oxford',
    isbn: '3843244391087',
    category: 'history'
  },
  {
    title: 'The experience of history',
    author: 'Bartlett, Kenneth R',
    year: '2004',
    publisher: 'Simur',
    isbn: '88520515235115',
    category: 'history'
  },
  {
    title: 'Charles Taylor :hermenéutica, ética y política',
    author: 'Lazo Briones, Pablo',
    year: '2016',
    publisher: 'Harvard',
    isbn: '0192247529005',
    category: 'Political Science'
  },
  {
    title: 'Hobbes y Rousseau: entre la autocracia y la democracia',
    author: 'Fernández Santillán, José Florencio',
    year: '1953',
    publisher: 'SigloXXI',
    isbn: '3522108711059',
    category: 'Political Science'
  },
  {
    title: 'Teoría del súbdito',
    author: 'Valdecantos, Antonio',
    year: '1964',
    publisher: 'UNAM',
    isbn: '7735109115379',
    category: 'Political Science'
  },
  {
    title: 'The Power of Art',
    author: 'Schama, Simon',
    year: '2006',
    publisher: 'BritishPunk',
    isbn: '7532912643108',
    category: 'Art'
  },
  {
    title: 'Al otro lado del espejo: Hermeneútica y arte',
    author: 'Conszt, Friederich',
    year: '1986',
    publisher: 'Porrúa',
    isbn: '1783267176923',
    category: 'Art'
  },
  {
    title: 'Francisco Villa: Entre el Ángel y el Fierro',
    author: 'Enrique Krauze',
    year: '1987',
    publisher: 'FCE',
    isbn: '8642477241634',
    category: 'history'
  },
  {
    title: 'África',
    author: 'Breuer',
    year: '1962',
    publisher: 'SigloXXI',
    isbn: '4783402985320',
    category: 'history'
  },
  {
    title: 'Las transgresiones del cuerpo',
    author: 'Pandolfi, Sylvia',
    year: '1983',
    publisher: 'MACG',
    isbn: '4962397862349',
    category: 'Art'
  }
];



exports.seed = function(knex, Promise) {
  return knex('documents')
    .del()
    .then(() => {
      return knex('documents')
        .insert(dataRows);
    });
};
