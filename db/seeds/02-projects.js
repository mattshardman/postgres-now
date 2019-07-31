
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          name: 'Do some homework', 
          description: 'Do all the work', 
          completed: false, 
          user_id: 1
        },
      ]);
    });
};
