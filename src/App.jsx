import { createBrowserRouter, RouterProvider } from "react-router";
import Form from "./pages/form.jsx";
import Table from "./pages/table.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />
  },
  {
    path: "/table",
    element: <Table />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App