dynamodb-projection-expression-helper
=====================================

Make dynamodb projection expressions by string.

Code Example
------------

```javascript
const projectionExp = require('dynamodb-projection-expression-helper');

const expressions = projectionExp('id, name, url, location, description');

console.log(result);
/*
{  
   ProjectionExpression: '#id, #name, #url, #location, #description',
   ExpressionAttributeNames: {  
      '#id': 'id',
      '#name': 'name',
      '#url': 'url',
      '#location': 'location',
      '#description': 'description'
   }
}
```

Installation
------------

```bash
npm install dynamodb-projection-expression-helper --save
```

Tests
-----

```bash
npm test
```
