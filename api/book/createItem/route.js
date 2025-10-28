module.exports = async (req, res, db) => {
  try {
    const newBookData = req.body;

    if (!newBookData || !newBookData.title) {
      return res.status(400).json({ error: 'Title is required to create a new book.' });
    }

    const createdBook = await db.addBook(newBookData);

    res.status(201).json(createdBook);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};