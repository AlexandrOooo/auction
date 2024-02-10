import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main/Main"
import Auction from "./pages/Auction/Auction"
import Auth from './pages/Auth/Auth';
import { AuthType } from "./@types/types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/sign-in",
    element: <Auth type={AuthType.signIn} />,
  },
  {
    path: "/sign-up",
    element: <Auth type={AuthType.signUp} />,
  },
  {
    path: "/auction/:id",
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
