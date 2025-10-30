const dbBooks = require("../../../../proxy/dbBooks");
const paginate = require("../../../../utils/paginationHelper");

module.exports = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const books = await dbBooks.getAll();

    const { data, meta } = paginate(books, { page, limit });

    res.status(200).json({ meta, data });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
