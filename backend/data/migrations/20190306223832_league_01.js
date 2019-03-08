exports.up = function(knex, Promise) {
    return knex.schema.createTable('league', league => {
      league.increments();
      league
      .string('Name')
      .notNullable();
     league
     .integer('Admin_User_ID')
     .unsigned()
     .notNullable();
     league
     .foreign('Admin_User_ID')
     .references('id')
     .on('users')
     league
     .integer('type')
     .unsigned()
     .notNullable();
     league
     .foreign('type')
     .references('id')
     .on('League_Type');
    
     league
     .integer('Teams_Game_Count');
     league
     .datetime('Game_length');
     league
     .datetime('Start_Day');
     league
     .boolean('Allow_Monday');
     league
     .boolean('Allow_Tuesday');
     league
     .boolean('Allow_Wednesday');
     league
     .boolean('Allow_Thursday');
     league
     .boolean('Allow_Friday');
     league
     .boolean('Allow_Saturday');
     league
     .boolean('Allow_Sunday');
     league
     .datetime('Monday_Start_Time');
     league
     .datetime('Monday_End_Time');
     league
     .datetime('Tuesday_Start_Time');
     league
     .datetime('Tuesday_End_Time');
     league
     .datetime('Wednesday_Start_Time');
     league
     .datetime('Wednesday_End_Time');
     league
     .datetime('Thursday_Start_Time');
     league
     .datetime('Thursday_End_Time');
     league
     .datetime('Friday_Start_Time');
     league
     .datetime('Friday_End_Time');
     league
     .datetime('Saturday_Start_Time');
     league
     .datetime('Saturday_End_Time');
     league
     .datetime('Sunday_Start_Time');
     league
     .datetime('Sunday_End_Time');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('league');
  };
  