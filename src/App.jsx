import "./App.css";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <div className='w-full h-screen flex'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
