exports.up = function(knex) {
  return knex.schema.createTable(horoscopes, function(table) {
    table.increments();
    table.string("signs").notnullable();
  });
};

exports.down = function(knex) {};
