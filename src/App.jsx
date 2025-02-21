import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from "./pages/Login"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import MySite from './pages/admin/Home'
import ProtectedRoute from './components/ProtectedRoute'
import ProjectList from './components/ProjectList'
import BlogList from './components/BlogList'
import Layout from './components/Layout'
import PublicBlogs from './pages/Blog'
import PublicProjecs from './pages/Projects'
import SiteLayout from './Layouts/SiteLayout'
import AboutMe from './pages/About'



const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children:[
      {path:"", element:<Home/>},
      {path:"projects", element:<PublicProjecs/>},
      {path:"blogs", element:<PublicBlogs/>},
      {path:"about", element:<AboutMe/>}

    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin-site",
    element: <ProtectedRoute><MySite></MySite></ProtectedRoute>
  },
  {
    path: "/admin-site/projects",
    element: <ProtectedRoute><ProjectList /></ProtectedRoute>,
  },
  {
    path: "/admin-site/blogs",
    element: <ProtectedRoute><BlogList /></ProtectedRoute>,
  },
  {
    path: "*", // Ruta para manejar páginas no encontradas
    element: <NotFound />,
  },
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
