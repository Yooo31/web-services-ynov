const fs = require('fs');
const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');

function generateSwaggerSpec(versions) {
  const apiPaths = ['./swagger/components.js'];

  versions.forEach(version => {
    const versionPath = path.join(__dirname, '..', 'api', version);
    const resources = fs.readdirSync(versionPath);

    resources.forEach(resource => {
      const routeFile = path.join(versionPath, resource, 'route.js');
      const docsFile = path.join(versionPath, resource, 'docs.js');

      if (fs.existsSync(routeFile)) apiPaths.push(routeFile);
      if (fs.existsSync(docsFile)) apiPaths.push(docsFile);
    });
  });

  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: `Books API (${versions.join(', ')})`,
        version: '1.0.0',
        description: 'Documentation générée automatiquement pour toutes les versions',
      },
      servers: versions.map(v => ({ url: `http://localhost:3000/` })),
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: apiPaths,
  };

  return swaggerJSDoc(options);
}

module.exports = { generateSwaggerSpec };
