const dbBooks = require("../../../../proxy/dbBooks");

module.exports = async (req, res) => {
  try {
    const { page = 1, limit = 2 } = req.query;

    const pageNum = Math.max(parseInt(page), 1);
    const limitNum = Math.max(parseInt(limit), 1);

    const books = await dbBooks.getAll();

    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;

    const paginatedBooks = books.slice(startIndex, endIndex);

    const totalItems = books.length;
    const totalPages = Math.ceil(totalItems / limitNum);

    res.status(200).json({
      page: pageNum,
      limit: limitNum,
      totalItems,
      totalPages,
      data: paginatedBooks,
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
