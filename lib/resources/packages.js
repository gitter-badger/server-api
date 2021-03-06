'use strict';

module.exports = {
  all: {
    method: 'GET',
    path: '/'
  },
  byName: {
    method: 'GET',
    path: '/:package'
  },
  add: {
    method: 'POST',
    path: '/'
  }
};