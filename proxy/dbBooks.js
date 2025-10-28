const books = require('../Mocks/books.json');

module.exports = {
  getAll: async () => {
    return books;
  },
  getById: async (id) => {
    return books[id];
  },
  addBook: async (newBook) => {
    books.push(newBook);
    return newBook;  },

  updateBook: async (id, updatedBook) => {
    books[id] = updatedBook;
    return updatedBook;
  },
  deleteBook: async (id) => {
    const index = books.findIndex(b => String(b.id) === String(id));
    if (index !== -1) {
      books.splice(index, 1);
      return true;
    }
    return false;
  }
}