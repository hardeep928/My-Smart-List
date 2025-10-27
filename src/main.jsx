import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "../components/Home.jsx";
import Create from "../components/Create.jsx";
import MyLists from "../components/MyLists.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getLocalData } from "./hooks/localStorage.js";
import { Auth0Provider } from "@auth0/auth0-react";

function Main() {
  const [data, setData] = useState(getLocalData());
  const [editIndex, setEditIndex] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/create",
          element: (
            <Create
              data={data}
              setData={setData}
              editIndex={editIndex}
              setEditIndex={setEditIndex}
            />
          ),
        },
        {
          path: "/mylists",
          element: (
            <MyLists
              data={data}
              setData={setData}
              setEditIndex={setEditIndex}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-vfhtbgqrvp4q5j5f.us.auth0.com"
    clientId="eAvOHO94EIveE6x9HoI6CaPTabPJtE1G"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Main />
  </Auth0Provider>
);
