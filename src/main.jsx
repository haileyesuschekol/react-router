import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Home from "./Home.jsx"
import Profile from "./Profile.jsx"
import NotFound from "./NotFound.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProfilePage from "./ProfilePage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/:profileId",
    element: <ProfilePage />,
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
