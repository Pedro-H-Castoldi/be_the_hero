
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); // Esse 2 indica q só 2 caracteres estarão nesse campo.
  });
};

exports.down = function(knex) {
  return knext.schema.dropTable('ongs');
};
