'use strict';

// Declare project modules
const logger = require('../../../configs/logger.js')

const
    models = [{
        id: 1,
        name: 'resi-dev v1.0.7',
        origin: 'CB Modelling Team',
        version: '1.0.7',
        modelType: 'resi-dev',
        category: 'Slotting',
        developed_by: 'judit.sandor',
        deployed_by: 'rob.croucher',
        variables: [
            'Strength of Comparables',
            'Loan Amount'
        ]
    }, {
        id: 2,
        name: 'resi-ipre v2.1.1',
        origin: 'CB Modelling Team',
        version: '2.1.1',
        modelType: 'resi-ipre',
        category: 'Slotting',
        developed_by: 'tom.osborn',
        deployed_by: 'rob.croucher',
        variables: [
            'Loan currency',
            'Loan Amount'
        ]
      }, {
          id: 4,
          name: 'comm-ipre v3.3.3',
          origin: 'CB Modelling Team',
          version: '3.3.3',
          modelType: 'comm-ipre',
          category: 'Slotting',
          developed_by: 'andy.donnell',
          deployed_by: 'michael.berry',
          variables: [
              'Loan to Value (%)',
              'Loan Amount',
              'Experience of Contractor'
          ]
        }
    ];


function getModels(req, res) {

  // Log message to console
  var message = "Retrieve models.  GET:/api/models responding to client";
  logger.info(message);

    res.json(models);
}

function getModelWithId(req, res) {

  // Log message to console
  var message = "Retrieve selected model.  GET:/api/models/:id responding to client";
  logger.info(message);

    let id = req.params.id || 0,
        result = {};

     for (let i = 0; i < models.length; i++) {
        if (models[i].id == id) {
            result = models[i];
            break;
        }
     }

     res.json(result);
}

module.exports = {
    getModels: getModels,
    getModelWithId: getModelWithId
};
