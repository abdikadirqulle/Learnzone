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
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react' 
import PrivateRoute from './components/PrivateRoute.jsx';


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
        element: <PrivateRoute />
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
    <RouterProvider router={router}/>
    </PersistGate>
    </Provider>
  </React.StrictMode>
)
