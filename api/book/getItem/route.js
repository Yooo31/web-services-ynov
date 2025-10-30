const dbBooks = require("../../proxy/dbBooks");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Book ID is required.' });
    }

    const book = await dbBooks.getById(id);

    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: `Book with ID ${id} not found.` });
    }
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};