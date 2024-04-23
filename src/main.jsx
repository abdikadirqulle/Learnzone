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
import { ClerkProvider } from '@clerk/clerk-react';

import { SignUpPage } from './auth/sign-up/SignUp.jsx';
import SignInPage from './auth/sign-in/[[...index]].jsx';


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


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
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider  publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router}/>
    </ClerkProvider>
  </React.StrictMode>
)
