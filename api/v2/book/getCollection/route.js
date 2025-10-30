const dbBooks = require("../../../../proxy/dbBooks");
const paginate = require("../../../../utils/paginationHelper");
const { attachHateoasToCollection } = require("../../../../utils/hateoasHelper");

module.exports = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const books = await dbBooks.getAll();

    const { data, meta } = paginate(books, { page, limit });
    const result = attachHateoasToCollection(data, `/api/v2/book`, meta);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
