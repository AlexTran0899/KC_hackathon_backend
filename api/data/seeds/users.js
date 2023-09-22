const bcrypt = require('bcryptjs')

exports.seed = function (knex) {
  const hashed = (data) => bcrypt.hashSync(data, 8)
  return knex('users').insert([
    { username: "roman", password: hashed("123")},
    { username: "dylan", password: hashed("123")},
    { username: "daniel", password: hashed("123")},
    { username: "kyle", password: hashed("123")},
    { username: "ben", password: hashed("123") },
    { username: "issac", password: hashed("123")},
    { username: "francis", password: hashed("123")},
    { username: "krisda", password: hashed("123")}
  ]);
};