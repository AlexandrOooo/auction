import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main"
import Auction from "./pages/Auction"
import Auth from './pages/Auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/sign-in",
    element: <Auth  type="sign-in" />,
  },
  {
    path: "/sign-up",
    element: <Auth type="sign-up" />,
  },
  {
    path: "/:id",
    element: <Auction />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
