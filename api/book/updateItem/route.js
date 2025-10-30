const dbBooks = require("../../proxy/dbBooks");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBookData = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Book ID is required for update.' });
    }

    if (Object.keys(updatedBookData).length === 0) {
        return res.status(400).json({ error: 'No data provided for update.' });
    }

    const book = await dbBooks.getById(id);
    if (!book) {
        return res.status(404).json({ error: `Book with ID ${id} not found.` });
    }

    const result = await dbBooks.updateBook(id, updatedBookData);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};