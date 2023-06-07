/**
 * Instalar Lodash
 *
 * npm i lodash
 * npm i @types/lodash
 */

// var _ = require('lodash');

import _ from 'lodash';

const users = [
  { username: 'Maria', role: 'admin' },
  { username: 'Camila', role: 'seller' },
  { username: 'Pedro', role: 'customer' },
];

const rolGroup = _.groupBy(users, ({ role }) => role);

console.log('✅Usuarios agrupados por Rol:');
console.table(rolGroup);
