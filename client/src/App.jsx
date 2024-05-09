import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Shared Layout
        <Outlet />
      </div>
    ),
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
