'use strict';

/**
 * Returns ProjectionExpression and ExpressionAttributeNames.
 *
 * @param {String} options Options
 * @returns {Object} Object
 */
module.exports = function(options) {
  let ProjectionExpression = '';
  let ExpressionAttributeNames = {};
  let parameters = options.split(',').map(function(item) {
    return item.trim();
  });

  parameters.forEach((prop, index) => {
    // Key condition expression process
    if (index > 0) {
      ProjectionExpression += ', ';
    }

    ProjectionExpression += `#${prop}`;

    // ExpressionAttributeNames
    ExpressionAttributeNames[`#${prop}`] = prop;
  });

  return {
    ProjectionExpression,
    ExpressionAttributeNames
  };
};
