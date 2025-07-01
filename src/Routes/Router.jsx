import { createBrowserRouter } from "react-router";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../pages/Home.jsx";
import PrivateRoute from "../provider/PrivateRoute.jsx";
import ForgetPass from "../pages/ForgetPass.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import BookDetails from '../pages/BookDetails';
import AddBook from '../pages/AddBook';
import MyBooks from '../pages/MyBooks';
import UpdateBook from '../pages/UpdateBook';
import Profile from '../pages/Profile';
import Bookshelf from "../pages/Bookshelf.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import DashboardLayout from "../Dashboard/DashboardLayout.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import AllBooks from "../Dashboard/AllBooks.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";

export const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/bookshelf',
                Component:Bookshelf,
            },
            {
                path: '/books/:id',
                element: <BookDetails />
            },
            {
                path:'/privacypolicy',
                Component:PrivacyPolicy
            },
            {
                path:'/aboutUs',
                Component:AboutUs
            },
            {
                path:'/contactUs',
                Component:ContactUs
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
             {
                index: true,
                element:<Profile></Profile>
            },
            {
                path: 'add-book',
                element: <AddBook />
            },
            {
                path: 'my-books',
                element: <MyBooks />
            },
            {
                path: 'my-books/update-book/:id',
                element: <UpdateBook />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path:'all-book',
                Component:AllBooks
            }
            
        ]
    },
    {
        path: '/auth',
        Component:AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'forgetpass',
                Component: ForgetPass
            },
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])