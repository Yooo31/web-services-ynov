/**
 * @openapi
 * tags:
 *   - name: Books (v2)
 *     description: "Gestion des livres version 2"
 *
 * paths:
 *   /api/v2/book/health:
 *     get:
 *       summary: "Vérifie l'état de l'API v2"
 *       tags: [Books (v2)]
 *       responses:
 *         200:
 *           description: "API v2 en ligne"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   version:
 *                     type: string
 *                     example: "v2"
 *                   message:
 *                     type: string
 *                     example: "This is Book API v2!"
 *
 *   /api/v2/book:
 *     get:
 *       summary: "Liste paginée des livres (accès admin requis)"
 *       tags: [Books (v2)]
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - $ref: '#/components/parameters/PageParam'
 *         - $ref: '#/components/parameters/LimitParam'
 *       responses:
 *         200:
 *           description: "Liste paginée des livres"
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/PaginatedBooks'
 */
