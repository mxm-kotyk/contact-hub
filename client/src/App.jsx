import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <div>Home Page</div>,
      },
      {
        path: "register",
        element: <div>Register Page</div>,
      },
      {
        path: "login",
        element: <div>Login Page</div>,
      },
      {
        path: "contacts",
        element: (
          <div>
            Contacts
            <Outlet />
          </div>
        ),
        children: [
          {
            path: ":contactId",
            element: <div>Contact</div>,
          },
          {
            path: ":contactId/edit",
            element: <div>Edit Contact</div>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
