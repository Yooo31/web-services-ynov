const dbBooks = require("../../proxy/dbBooks");

module.exports = async (req, res) => {
  try {
    const books = await dbBooks.getAll();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};
