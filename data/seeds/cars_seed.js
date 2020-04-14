
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries 
      return knex('cars').insert([
        {id: 1, vin: 'KMHDH4AEXCU309866', make: 'hyundai', model: 'elantra', mileage: '96152', transmission: 'automatic', title: 'clear' },
        {id: 2, vin: '1FTRX17W02NB51171', make: 'ford', model: 'f-150', mileage: '216043', transmission: 'manual', title: 'salvage' },
        {id: 3, vin: '3GSCL33P09S550050', make: 'saturn', model: 'vue', mileage: '135947', transmission: 'automatic', title: 'clear' },
        {id: 4, vin: '1G1ZC5E1XBF352590', make: 'chevrolet', model: 'malibu', mileage: '105211', transmission: 'automatic', title: 'salvage' },
        {id: 5, vin: '2CNDL23F986048518', make: 'chevrolet', model: 'equinox', mileage: '115784', transmission: 'automatic', title: '' },
        {id: 6, vin: '1FDKF37G0VEB50028', make: 'ford', model: 'f-350', mileage: '277551', transmission: '', title: 'salvage' },
        {id: 7, vin: '2C4RC1CG6ER215215', make: 'chrysler', model: 'town and country', mileage: '70502', transmission: 'automatic', title: 'clear' }
      ]);
    });
};
