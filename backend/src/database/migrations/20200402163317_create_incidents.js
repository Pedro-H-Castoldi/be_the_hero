
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); // Incrementa ID numerico, cada criação é n+1;

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); // Referênciar tabela.

        table.foreign('ong_id').references('id').inTable('ongs'); // Chave estrangeira.
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
