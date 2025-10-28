module.exports = async (req, res, db) => {
  try {
    const books = await db.getAll();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};
