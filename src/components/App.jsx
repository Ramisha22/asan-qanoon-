// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './signup';
import Login from './login';
import Main from './main';
import Textedit from './textedit';
import Displayfiles from './displayfiles';
import Displaymessages from './displaymsgs';
import Updatefileeditor from './updatefileeditor';
import Home from './home';
import ModelTrain from './modeltrain';
import SideNavbar from './sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Dashboard />}></Route> */}
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/texteditor" element={<Textedit />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/displayfiles" element={<Displayfiles />}></Route>
        <Route exact path="/displaymessages" element={<Displaymessages />}></Route>
        <Route exact path="/Updatefileeditor" element={<Updatefileeditor />}></Route>
        <Route exact path="/modeltraing" element={<ModelTrain />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
