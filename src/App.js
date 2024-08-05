import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <RouterProvider router={AppRoutes} />
    </>
  );
}

export default App;
