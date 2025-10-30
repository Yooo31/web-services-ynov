/**
 * @openapi
 * tags:
 *   - name: Books
 *     description: Gestion des livres
 *
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "1"
 *         title:
 *           type: string
 *           example: "The Great Gatsby"
 *         author:
 *           type: string
 *           example: "F. Scott Fitzgerald"
 *
 * paths:
 *   /api/v1/book/health:
 *     get:
 *       summary: Vérifie l’état de l’API des livres
 *       tags: [Books]
 *       responses:
 *         200:
 *           description: L’API est en ligne
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
 *   /api/v1/book:
 *     get:
 *       summary: Liste tous les livres
 *       tags: [Books]
 *       responses:
 *         200:
 *           description: Liste des livres
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Book'
 *
 *     post:
 *       summary: Crée un nouveau livre
 *       tags: [Books]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       responses:
 *         201:
 *           description: Livre créé avec succès
 *
 *   /api/v1/book/{id}:
 *     get:
 *       summary: Récupère un livre spécifique
 *       tags: [Books]
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *           description: ID du livre
 *       responses:
 *         200:
 *           description: Livre trouvé
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Book'
 *         404:
 *           description: Livre introuvable
 *
 *     put:
 *       summary: Met à jour un livre
 *       tags: [Books]
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       responses:
 *         200:
 *           description: Livre mis à jour
 *
 *     delete:
 *       summary: Supprime un livre
 *       tags: [Books]
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         204:
 *           description: Livre supprimé
 */
