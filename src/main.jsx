import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/CTA/About.jsx';
import Hero from './components/Hero.jsx';
import Courses from './components/courses/Courses.jsx';
import Contact from './components/contact/Contact.jsx';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,

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
            path: "/contact",
            element: <Contact />
        },
      ]
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
