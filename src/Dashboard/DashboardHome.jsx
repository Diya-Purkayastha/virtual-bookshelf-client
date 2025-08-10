import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { AuthContext } from "../provider/AuthProvider";
import { getFirebaseToken } from "../utils/getFirebaseToken";
import useTitle from "../hook/useTitle";
import { BookOpen, CheckCircle, XCircle } from "lucide-react";

const COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#a78bfa"];

const DashboardHome = () => {
  useTitle("Profile Dashboard");
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const token = await getFirebaseToken();
      const res = await axios.get(
        `https://virtual-bookshelf-server-nine.vercel.app/books/user/${user.email}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBooks(res.data);
    };
    fetchBooks();
  }, [user.email]);

  // Count by category
  const categoryCounts = books.reduce((acc, book) => {
    acc[book.book_category] = (acc[book.book_category] || 0) + 1;
    return acc;
  }, {});
  const chartData = Object.entries(categoryCounts).map(([name, value]) => ({ name, value }));

  // Summary info
  const totalBooks = books.length;
  const readCount = books.filter((b) => b.reading_status === "Read").length;
  const unreadCount = totalBooks - readCount;

  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">📚 Bookshelf Dashboard</h1>
            <p className="text-white/80">Welcome back, {user.displayName}</p>
          </div>
          <img
            src={user.photoURL}
            alt="User avatar"
            className="w-14 h-14 rounded-full border-2 border-white shadow-md"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pb-10">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition">
            <div className="bg-primary/10 p-4 rounded-full text-primary">
              <BookOpen size={28} />
            </div>
            <div>
              <p className="text-gray-500">Total Books</p>
              <h2 className="text-3xl font-bold">{totalBooks}</h2>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition">
            <div className="bg-green-100 p-4 rounded-full text-green-500">
              <CheckCircle size={28} />
            </div>
            <div>
              <p className="text-gray-500">Read</p>
              <h2 className="text-3xl font-bold">{readCount}</h2>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition">
            <div className="bg-yellow-100 p-4 rounded-full text-yellow-500">
              <XCircle size={28} />
            </div>
            <div>
              <p className="text-gray-500">Unread</p>
              <h2 className="text-3xl font-bold">{unreadCount}</h2>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Books by Category</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  label
                >
                  {chartData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Books Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">📖 Recent Books</h3>
          {books.slice(0, 5).length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {books.slice(0, 5).map((book, i) => (
                <li key={i} className="py-3 flex justify-between items-center">
                  <span className="font-medium">{book.title}</span>
                  <span className="text-sm text-gray-500">{book.book_category}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No books found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
