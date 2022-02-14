// import './App.css';
import { Route, Routes } from "react-router-dom";
import MainNav from "./Layout/MainNav";
import About from "./pages/About";

// import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path="/" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
