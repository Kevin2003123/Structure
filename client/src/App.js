
import './App.css';
import { Routes, Route } from "react-router-dom";
import User from './components/User/User';

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<User/>} />
      </Routes>
   
  );
}

export default App;
