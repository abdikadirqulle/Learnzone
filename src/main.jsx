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
import CourseId from './components/courses/CourseId.jsx';


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
            element: <CourseId />
        },
        {
            path: "/contact",
            element: <Contact />
        },
      ]
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
