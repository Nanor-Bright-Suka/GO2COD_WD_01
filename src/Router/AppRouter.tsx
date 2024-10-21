// src/App.tsx
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Layout from '../Components/Layout';
import WelcomePage from "../Page/WelcomPage"
import HomePage from "../Page/HomePage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
          <Route element={<Layout />}>
        <Route path='/' element={<WelcomePage />} />
        <Route path='homepage' element={<HomePage /> } /> 
          </Route>
    </>
  )
);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default AppRouter;
