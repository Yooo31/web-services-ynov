/**
 * @openapi
 * tags:
 *   - name: Books (v2)
 *     description: Gestion des livres (version 2)

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

 *   /api/v2/book:
 *     get:
 *       summary: Liste tous les livres (accès admin requis)
 *       tags: [Books (v2)]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Liste des livres
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "1"
 *                     title:
 *                       type: string
 *                       example: "The Great Gatsby"
 */
