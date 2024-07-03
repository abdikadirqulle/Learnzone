import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/about/About.jsx';
import Hero from './components/Hero.jsx';
import Courses from './components/courses/Courses.jsx';
import Contact from './components/contact/Contact.jsx';
import NotFound from './components/not-found.jsx';
import CourseDetails from './components/courses/CourseDetails.jsx';

import  SignUpPage  from './auth/sign-up/SignUp.jsx';
import SignInPage from './auth/sign-in/SignIn.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
 


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement : <NotFound />,

      children : [
        {
            path: "/",
            element: <Hero />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/courses",
            element: <Courses />
        },
        {
            path: "/courses/:id",
            element: <CourseDetails />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/sign-in",
            element: <SignInPage />
        },
        {
            path: "/sign-up",
            element: <SignUpPage />
        },
       
      ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider >
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
)
