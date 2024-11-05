import "./App.css";
import BooksDetailsPage from "./webpage/BooksDetailsPage";
import BooksPage from "./webpage/BooksPage";
import ElectronicsDetailsPage from "./webpage/ElectronicsDetailsPage";
import ElectronicsPage from "./webpage/ElectronicsPage";
import HomePage from "./webpage/HomePage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1 style={{ color: "red" }}>404 Page Not Found</h1>,
  },
  {
    path: "/electronics",
    element: (
      <div className="layout">
        <ElectronicsPage />
        <Outlet />
      </div>
    ),
    children: [{ path: ":id", element: <ElectronicsDetailsPage /> }],
  },
  {
    path: "/books",
    element: (
      <div className="layout">
        <BooksPage />
        <Outlet />
      </div>
    ),
    children: [{ path: ":id", element: <BooksDetailsPage /> }],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
