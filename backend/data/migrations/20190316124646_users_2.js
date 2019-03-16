
exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.string('google_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.dropColumn('google_id');
    });
};
