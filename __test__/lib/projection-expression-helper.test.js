'use strict';

const projectionHelper = require('../../lib/projection-expression-helper');

const parametersToValidate = 'id, name, url, location, description';

/**
 * Get parameters expected.
 *
 * @param {string} operator Operator (and/or)
 * @returns {Object} Parameters expected
 */
function getParametersExpected() {
  return {
    ProjectionExpression: '#id, #name, #url, #location, #description',
    ExpressionAttributeNames: {
      '#id': 'id',
      '#name': 'name',
      '#url': 'url',
      '#location': 'location',
      '#description': 'description'
    }
  };
}

test('projection helper should return valid parameters by passing only option.parameters', () => {
  expect(projectionHelper(parametersToValidate)).toMatchObject(getParametersExpected());
});
