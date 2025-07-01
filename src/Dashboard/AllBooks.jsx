import { useEffect, useState } from 'react';
import axios from 'axios';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
   const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    axios.get('https://virtual-bookshelf-server-nine.vercel.app/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = books
    .filter(book =>
      (book.book_title.toLowerCase().includes(query.toLowerCase()) ||
        book.book_author.toLowerCase().includes(query.toLowerCase())) &&
      (status ? book.reading_status === status : true)
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'title-asc':
          return a.book_title.localeCompare(b.book_title);
        case 'title-desc':
          return b.book_title.localeCompare(a.book_title);
        case 'author-asc':
          return a.book_author.localeCompare(b.book_author);
        case 'author-desc':
          return b.book_author.localeCompare(a.book_author);
        case 'upvote-asc':
          return a.upvote - b.upvote;
        case 'upvote-desc':
          return b.upvote - a.upvote;
        default:
          return 0;
      };
    });

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-3xl font-bold my-8 text-center'>📚 All Books</h1>

      {/* Search & Filter */}
      <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Search by title or author"
          className="input input-bordered w-full md:w-1/2"
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="select select-bordered w-full md:w-1/4"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Read">Read</option>
          <option value="Reading">Reading</option>
          <option value="Want-to-Read">Want-to-Read</option>
        </select>
        <select
          className="select select-bordered w-full md:w-1/4"
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="title-asc">Title (A–Z)</option>
          <option value="title-desc">Title (Z–A)</option>
          <option value="author-asc">Author (A–Z)</option>
          <option value="author-desc">Author (Z–A)</option>
          <option value="upvote-desc">Upvotes (High → Low)</option>
          <option value="upvote-asc">Upvotes (Low → High)</option>
        </select>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="table table-zebra w-full text-sm">
          <thead className="bg-base-200 text-base font-semibold text-base-content">
            <tr>
              <th>#</th>
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Status</th>
              <th>Upvotes</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={book.cover_photo}
                    alt={book.book_title}
                    className="w-12 h-16 object-cover rounded"
                  />
                </td>
                <td className="font-semibold">{book.book_title}</td>
                <td>{book.book_author}</td>
                <td>{book.book_category}</td>
                <td>
                  <span className="badge badge-outline badge-sm">
                    {book.reading_status}
                  </span>
                </td>
                <td className="text-center">{book.upvote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
