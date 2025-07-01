import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { getFirebaseToken } from '../utils/getFirebaseToken';

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const token = await getFirebaseToken();
      axios.get(`https://virtual-bookshelf-server-nine.vercel.app/books/user/${user.email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => setBooks(res.data));
    };
    fetchBooks();
  }, [user.email]);

  const handleDelete = async (id) => {
    const token = await getFirebaseToken();
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://virtual-bookshelf-server-nine.vercel.app/books/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(() => {
            setBooks(prevBooks => prevBooks.filter(b => b._id !== id));
            Swal.fire('Deleted!', 'Your book has been deleted.', 'success');
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-8 text-center">📚 My Books</h1>

      <div className="overflow-x-auto bg-neutral p-4 shadow-xl rounded-lg">
        <table className="table table-zebra w-full text-sm">
          <thead className="bg-base-200 text-base font-semibold text-base-content">
            <tr>
              <th>#</th>
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Overview</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
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
                <td className="max-w-xs truncate" title={book.book_overview}>
                  {book.book_overview}
                </td>
                <td className="space-x-2">
                  <Link to={`update-book/${book._id}`} className="btn btn-sm btn-secondary">
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="btn btn-sm bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooks;
