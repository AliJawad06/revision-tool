import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {CreateSection} from "./components/create-section";
import {Row} from "./components/row";
import { Main } from './components/main';
import { loader as mainLoader } from "./components/main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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