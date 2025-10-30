/**
 * @openapi
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
 *         _links:
 *           type: object
 *           additionalProperties:
 *             type: object
 *             properties:
 *               href:
 *                 type: string
 *     PaginationMeta:
 *       type: object
 *       properties:
 *         page:
 *           type: integer
 *           example: 1
 *         limit:
 *           type: integer
 *           example: 10
 *         totalItems:
 *           type: integer
 *           example: 28
 *         totalPages:
 *           type: integer
 *           example: 3
 *         hasNextPage:
 *           type: boolean
 *           example: true
 *         hasPrevPage:
 *           type: boolean
 *           example: false
 *     PaginatedBooks:
 *       type: object
 *       properties:
 *         meta:
 *           $ref: '#/components/schemas/PaginationMeta'
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Book'
 *   parameters:
 *     PageParam:
 *       name: page
 *       in: query
 *       description: "Page number, default is 1"
 *       required: false
 *       schema:
 *         type: integer
 *         example: 1
 *     LimitParam:
 *       name: limit
 *       in: query
 *       description: "Number of items per page, default is 10"
 *       required: false
 *       schema:
 *         type: integer
 *         example: 10
 */
