import logo from './logo.svg';
import './App.css';
import { loader as mainLoader } from './components/MMain';

import { MMain } from './components/MMain';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {CreateSection} from "./components/create-section";
//import { Main } from './components/main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MMain />,
    loader: mainLoader
  },
  {
    path: "/create-section",
    element: <CreateSection />
  }
])

function App() {

    return <RouterProvider router={router}  />;

}

export default App;