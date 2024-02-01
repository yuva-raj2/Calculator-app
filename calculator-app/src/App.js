import {BrowserRouter,Route,Routes} from "react-router-dom";
import Calculator from "./Components/Calculator/Calculator";
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route element={<Calculator/>} path="/home"/>
            <Route element={<Calculator/>} path="/"/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
