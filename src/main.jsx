import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './pages/ErrorPages'
import { Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

const root = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/aivie/dashboard"} replace />,
    errorElement: <ErrorPage />
  },
  {
    path: "/aivie/dashboard",
    element : <Dashboard />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={root}>
      </RouterProvider>
  </StrictMode>,
)
