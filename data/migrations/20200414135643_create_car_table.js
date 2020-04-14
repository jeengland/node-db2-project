
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.string('vin', 17).notNullable().index().unique();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission');
      tbl.string('title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cars');
};
