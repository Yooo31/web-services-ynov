const dbBooks = require("../../../../proxy/dbBooks");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Book ID is required for deletion.' });
    }

    const deleted = await dbBooks.deleteBook(id);

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: `Book with ID ${id} not found.` });
    }
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};