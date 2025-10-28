module.exports = async (req, res, db) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Book ID is required for deletion.' });
    }

    const deleted = await db.deleteBook(id);

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