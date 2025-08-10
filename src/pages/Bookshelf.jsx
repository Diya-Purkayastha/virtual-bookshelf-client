import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard.jsx'
import axios from 'axios';
import useTitle from '../hook/useTitle.jsx';

const Bookshelf = () => {
   useTitle('Bookshelf')
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
    <div className="container mx-auto p-4 mt-20">
      <h1 className='text-3xl font-bold mt-8 mb-4 text-center'>📚 Bookshelf</h1>
      <p className='mb-8 text-center italic text-sm'>"A room without books is like a body without a soul." - Marcus Tullius Cicero </p>

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(book => <BookCard key={book._id} book={book}></BookCard>)}
      </div>
    </div>
  );
};

export default Bookshelf;
