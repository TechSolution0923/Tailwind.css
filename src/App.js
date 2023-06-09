import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  Root from './routes/root';
import Contact from './routes/contact';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/contact/:contactId",
    element: <Contact />
  }
]);

function App() {
  return (
    <RouterProvider router={Router} />
  )
}

export default App;
