/**
 * @param {Array} items
 * @param {Object} options
 * @param {number} options.page
 * @param {number} options.limit
 * @returns {Object}
 */
function paginate(items = [], { page = 1, limit = 2 } = {}) {
  const pageNum = Math.max(parseInt(page), 1);
  const limitNum = Math.max(parseInt(limit), 1);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / limitNum);

  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = startIndex + limitNum;

  const data = items.slice(startIndex, endIndex);

  return {
    data,
    meta: {
      page: pageNum,
      limit: limitNum,
      totalItems,
      totalPages,
      hasNextPage: pageNum < totalPages,
      hasPrevPage: pageNum > 1,
    },
  };
}

module.exports = paginate;
