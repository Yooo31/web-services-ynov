/**
 * @openapi
 * tags:
 *   - name: Books (v2)
 *     description: Gestion des livres (version 2)
 *
 * paths:
 *   /api/v2/book/health:
 *     get:
 *       summary: Vérifie l’état de l’API des livres v2
 *       tags: [Books (v2)]
 *       responses:
 *         200:
 *           description: L’API v2 est en ligne
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   version:
 *                     type: string
 *                   message:
 *                     type: string
 *
 *   /api/v2/book:
 *     get:
 *       summary: Liste tous les livres (accès admin requis)
 *       tags: [Books (v2)]
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: page
 *           in: query
 *           description: Numéro de la page (par défaut 1)
 *           required: false
 *           schema:
 *             type: integer
 *             example: 1
 *         - name: limit
 *           in: query
 *           description: Nombre d’éléments par page (par défaut 2)
 *           required: false
 *           schema:
 *             type: integer
 *             example: 2
 *       responses:
 *         200:
 *           description: Liste paginée des livres
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   page:
 *                     type: integer
 *                     example: 1
 *                   limit:
 *                     type: integer
 *                     example: 10
 *                   totalItems:
 *                     type: integer
 *                     example: 30
 *                   totalPages:
 *                     type: integer
 *                     example: 3
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "1"
 *                         title:
 *                           type: string
 *                           example: "The Great Gatsby"
 *                         author:
 *                           type: string
 *                           example: "F. Scott Fitzgerald"
 */
