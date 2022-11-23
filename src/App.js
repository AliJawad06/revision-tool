import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {CreateSection} from "./components/create-section";
import {Row} from "./components/row";
import { Main } from './components/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/create-section' element = {<CreateSection />} />
        <Route path = '/row' element = {<Row />} />
        <Route path = "/" element = {<Main />} />
      </Routes>
    </Router>
  );
}

export default App;